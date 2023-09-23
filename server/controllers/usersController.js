const db = require("./../models");
const fs = require("fs").promises;
const {
    findUsername,
    findUserId,
    findUserEmail,
    findAllUsers,
    passwordUpdate,
} = require("./../services/userService");
const { createJWT } = require("./../lib/jwt");
const { deleteFiles } = require("./../helper/deleteFiles");
const { hash, match } = require("./../helper/hashing");
const transporter = require("./../helper/transporter");
const handlebars = require("handlebars");
const { log } = require("handlebars/runtime");
const { where } = require("sequelize");

module.exports = {
    updateImage: async (req, res, next) => {
        const { id } = req.dataToken;
        try {
            const dataImage = await db.user.findOne({
                where: { id },
            });

            const path = req.files.image[0].path;
            await db.user.update({ profile_picture: path }, { where: { id } });

            if (dataImage.profile_picture != "public/default/default_pfp.png") {
                deleteFiles({ image: [{ path: dataImage.dataValues.profile_picture }] });
            }

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
            console.log(req.body);
            const { username, password } = req.body;
            if (!username || !password)
                throw { message: "Provided data is not complete" };
            const account = await findUsername(username);
            console.log(account);
            if (!account) throw { message: "Account was not found" };
            const hashMatch = await match(
                password,
                account.dataValues.password
            );
            console.log(hashMatch);
            if (!hashMatch)
                throw { status: 401, message: "Incorrect password" };
            const token = await createJWT(
                {
                    id: account.dataValues.id,
                    role: account.dataValues.role,
                    apiKey: "Approved",
                },
                "365d"
            );
            if (account.dataValues.status == "Disabled")
                throw {
                    message:
                        "Invalid Login, Account has been disabled, please contact an admin",
                };
            res.status(201).send({
                isError: false,
                message: "Account was found",
                accessToken: token,
                data: {
                    id: account.dataValues.id,
                    username: account.dataValues.username,
                    profile_picture: account.dataValues.profile_picture,
                    email: account.dataValues.email,
                    role: account.dataValues.role,
                },
            });
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },
    resetPassword: async (req, res, next) => {
        try {
            const { id } = req.dataToken;
            const newPassword = req.body.password;
            if (!newPassword) throw { message: "please enter a password" };
            const hashedPassword = await hash(newPassword);
            const account = await findUserId(id);
            console.log(account);
            const hashMatch = await match(
                newPassword,
                account.dataValues.password
            );
            if (hashMatch)
                throw {
                    message:
                        "The new password cannot be the same as the old one",
                };
            await passwordUpdate(hashedPassword, id);
            res.status(201).send({
                isError: false,
                message: "Password has been changed",
                data: null,
            });
        } catch (error) {
            console.log(error);
            next(error);
        }
    },
    sendPasswordMail: async (req, res, next) => {
        try {
            const { email } = req.body;
            if (!email)
                throw { message: "Please insert a valid email address" };
            const account = await findUserEmail(email);
            const id = account.dataValues.id;
            const token = await createJWT({ id: id, apiKey: "Approved" }, "2h");
            const username = account.dataValues.username;
            const readTemplate = await fs.readFile(
                "./public/template.html",
                "utf-8"
            );
            const compiledTemplate = await handlebars.compile(readTemplate);
            const newTemplate = compiledTemplate({ username, token });
            await transporter.sendMail({
                from: "flujo-post",
                to: "aryosetyotama27@gmail.com",
                subject: "password recovery email",
                html: newTemplate,
            });
            res.status(201).send({
                isError: false,
                message: "recovery email sent",
                data: null,
            });
        } catch (error) {
            next(error);
        }
    },
    allUsers: async (req, res, next) => {
        try {
            const data = await findAllUsers();
            res.status(201).send({
                isError: false,
                message: "user list fetched",
                data: data,
            });
        } catch (error) {
            next(error);
        }
    },
    getUser: async (req, res, next) => {
        try {
            const { id } = req.dataToken;

            const data = await db.user.findOne({
                attributes: ["id", "username", "email", "profile_picture", "role"],
                where: { id },
            });

            res.status(201).send({
                isError: false,
                message: "user list fetched",
                data: data,
            });
        } catch (error) {
            next(error);
        }
    },
    registerCashier: async (req, res, next) => {
        try {
            const { username, email, password } = req.body;
            console.log(username, email, password);
            if (!username || !email || !password) throw { message: "data provided is incomplete" };
            const existingUsername = await findUsername(username);
            const existingEmail = await findUserEmail(email);
            if (existingUsername) throw { message: "username has already been registered" }
            if (existingEmail) throw { message: "email has already been registered" }
            const hashedPassword = await hash(password);
            const account = await db.user.create({ username, email, password: hashedPassword });
            res.status(201).send({
                isError: false,
                message: "Cashier succesfully registered",
                data: null
            })
        } catch (error) {
            next(error);
        }
    },
    updateStatus: async (req, res, next) => {
        try {
            const { username, newStatus } = req.body;
            console.log(username, newStatus);
            const account = await findUsername(username);
            console.log(account);
            if (!account) throw { message: "account not found" };
            await db.user.update(
                {
                    status: newStatus,
                },
                {
                    where: { username },
                }
            );
            res.status(201).send({
                isError: false,
                message: "Update success",
                data: null
            })
        } catch (error) {
            next(error);
        }
    },
};
