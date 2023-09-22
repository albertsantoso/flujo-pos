const express = require("express");
const Router = express.Router();

//* Import Controller
const { usersController } = require("../controllers");

//* Import Middleware
const upload = require("./../middleware/upload");
const { validateUserEmail, validateUserPassword, handleValidationErrors } = require('./../middleware/validator');
const { verify } = require('./../lib/jwt');

Router.get('/user-list', usersController.allUsers);
Router.get('/specific/:id', verify, usersController.specificUser);
Router.post('/register', validateUserEmail, validateUserPassword, handleValidationErrors, usersController.registerCashier);
Router.post('/login', validateUserPassword, handleValidationErrors, usersController.login);
Router.post('/recover-password', validateUserEmail, validateUserPassword, handleValidationErrors, usersController.sendPasswordMail);
Router.patch("/update", upload, usersController.updateImage);
Router.patch('/change-password/:id', validateUserPassword, handleValidationErrors, verify, usersController.resetPassword);
Router.patch('/update-role', verify, usersController.updateStatus);

module.exports = Router;