const db = require("./../models");
const { deleteFiles } = require("./../helper/deleteFiles");
const {createJWT} = require('./../lib/jwt');
const {hash, match} = require('./../helper/hashing');
const transporter = require('./../helper/transporter');
const fs = require('fs').promises;
const Handlebars = require('handlebars')

const {findUsers, findUserId, findUserEmail, passwordUpdate} = require('./../services/userService');

module.exports = {
    updateImage: async (req, res, next) => {
        const { id } = req.query;
        try {
            const dataImage = await db.user.findOne({
                where: { id },
            });

            const path = req.files.images[0].path;
            await db.user.update({ profile_picture: path }, { where: { id } });
            deleteFiles({ images: [{ path: dataImage.profile_picture }] });

            res.status(200).send({
                isError: false,
                message: "Update Image Success",
                data: null,
            });
        } catch (error) {
            deleteFiles(req.files);
            next(error);
        }
    },

    login: async(req, res, next) => {
        try {
            const {username, password} = req.body;
            if(!username || !password) throw {message: "Provided data is not complete"}
            const account = await findUsers(username);
            if(!account) throw {message: "Account was not found"}
            const hashMatch = await match(password, account.dataValues.password)
            if(!hashMatch) throw {message: "Incorrect password"}
            const token = await createJWT({id: account.dataValues.id, role: account.dataValues.role}, '365d')            
            res.status(201).send({
                isError: false,
                message: "Account was found",
                data: token
            })
        } catch (error) {
            next(error)
        }
    },

    resetPassword: async(req, res, next) => {
        try {
            const {id} = req.dataToken;
            const newPassword = req.body.password;
            if(!newPassword) throw {message: "please enter a password"}
            const hashedPassword = await hash(newPassword);

            const account = await findUserId(id);

            console.log(hashedPassword);
            console.log(account.dataValues.password);
            const hashMatch = await match(newPassword, account.dataValues.password)
            if(hashMatch) throw {message: "The new password cannot be the same as the old one"}
            await passwordUpdate(hashedPassword, id)
            res.status(201).send(
                {
                    isError: false,
                    message: "Password has been changed",
                    data: req.dataToken
                }
            )
        } catch (error) {
            console.log(error);
            next(error)
        }
    },

    sendPasswordMail: async(req, res, next) => {
        try {
            const {email} = req.body;
            if(!email) throw {message: "Please insert a valid email address"};
            const account = await findUserEmail(email);
            const id = account.dataValues.id;
            const token = await createJWT({id: id}, '2h');
            const username = account.dataValues.username;
            const readTemplate = await fs.readFile('./public/template.html', 'utf-8');
            const compiledTemplate = await Handlebars.compile(readTemplate);
            const newTemplate = compiledTemplate({username, token})
            await transporter.sendMail(
                {
                    from: 'flujo-post',
                    to: 'aryosetyotama27@gmail.com', // ganti email mungkin nanti
                    subject: 'password recovery email',
                    html: newTemplate
                }
            )
            res.status(201).send(
                {
                    isError: false,
                    message: "recovery email sent",
                    data: null
                }
            )
        } catch (error) {
            next(error)
        }
    }
};
