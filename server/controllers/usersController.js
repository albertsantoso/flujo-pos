const db = require("./../models");
const fs = require('fs').promises;
const {findUsername, findUserId, findUserEmail, findAllUsers, passwordUpdate} = require('./../services/userService');
const { createJWT } = require('./../lib/jwt');
const { deleteFiles } = require("./../helper/deleteFiles");
const { hash, match } = require('./../helper/hashing');
const transporter = require('./../helper/transporter');
const handlebars = require('handlebars');

module.exports = {
    updateImage: async (req, res, next) => {
        const {id} = req.query;
        try {
            const dataImage = await db.user.findOne({
                where: {id},
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
    login: async (req, res, next) => {
        try {
            const {username, password} = req.body;
            if(!username || !password) throw {message: "Provided data is not complete"}
            const account = await findUsername(username);
            console.log(account);
            if(!account) throw {message: "Account was not found"}
            const hashMatch = await match(password, account.dataValues.password)
            if (!hashMatch) throw { message: "Incorrect password" }
            const token = await createJWT({ id: account.dataValues.id, role: account.dataValues.role, apiKey: "Approved" }, '1d')
            if(account.dataValues.status == 'Disabled') throw {message: "Invalid Login, Account has been disabled, please contact an admin"}
            res.status(201).send({
                isError: false,
                message: "Account was found",
                accessToken: token,
                data: {
                    id: account.dataValues.id,
                    username: account.dataValues.username,
                    profile_picture: account.dataValues.profile_picture,
                    role: account.dataValues.role
                }
            })
        } catch (error) {
            next(error)
        }
    },
    resetPassword: async (req, res, next) => {
        try {
            const {id} = req.dataToken;
            const newPassword = req.body.password;
            if(!newPassword) throw { message: "please enter a password" }
            const hashedPassword = await hash(newPassword);
            const account = await findUserId(id);
            const hashMatch = await match(newPassword, account.dataValues.password)
            if(hashMatch) throw { message: "The new password cannot be the same as the old one" }
            await passwordUpdate(hashedPassword, id)
            res.status(201).send(
                {
                    isError: false,
                    message: "Password has been changed",
                    data: null
                }
            )
        } catch (error) {
            next(error)
        }
    },
    sendPasswordMail: async (req, res, next) => {
        try {
            const {email} = req.body;
            if (!email) throw { message: "Please insert a valid email address" };
            const account = await findUserEmail(email);
            const id = account.dataValues.id;
            const token = await createJWT({ id: id }, '2h');
            const username = account.dataValues.username;
            const readTemplate = await fs.readFile('./public/template.html', 'utf-8');
            const compiledTemplate = await handlebars.compile(readTemplate);
            const newTemplate = compiledTemplate({ username, token })
            await transporter.sendMail(
                {
                    from: 'flujo-post',
                    to: email,
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
    },
    allUsers: async(req, res, next) => {
        try {
            const data = await findAllUsers()
            res.status(201).send({
                isError: false,
                message: "user list fetched",
                data: data
            })
        } catch (error) {
            next(error)
        }
    },
    specificUser: async(req, res, next) => {
        try {
            const {id} = req.dataToken
            const data = await db.user.findOne({
                where: {id}
            })
            res.status(201).send({
                isError: false,
                message: "specified user found!",
                data: data
            })
        } catch (error) {
            next(error);
        }
    },
    registerCashier: async(req, res, next) => {
        try {
            const {username, email, password} = req.body;
            if(!username || !email || !password) throw {message: "data provided is incomplete"};
            const existingUsername = await findUsername();
            const existingEmail = await findUserEmail();
            if(existingUsername) throw {message: "username has already been registered"}
            if(existingEmail) throw {message: "email has already been registered"}
            const hashedPassword = await hash(password);
            const account = await db.user.create({username, email, password: hashedPassword});
            res.status(201).send({
                isError: false,
                message: "Cashier succesfully registered",
                data: token
            })
        } catch (error) {
            next(error)
        }
    },
    updateStatus: async(req, res, next) => {
        try {
            const {id} = req.dataToken;
            const newStatus = req.body;
            if(!id) throw {message: "error, missing an input ID"};
            const account = await findUserId(id);
            if(!account) throw {message: "account not found"};
            await db.user.update(
                {
                    status: newStatus
                },
                {
                    where: {id}
                }
            )
        } catch (error) {
            next(error);
        }
    }
};