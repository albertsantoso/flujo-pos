const express = require("express");
const Router = express.Router();

//* Import Controller
const { usersController } = require("../controllers");

//* Import Middleware
const upload = require("./../middleware/upload");
const { validateUserEmail, validateUserPassword, handleValidationErrors } = require('./../middleware/validator');
const { verify } = require('./../lib/jwt');

Router.get('/list', verify, usersController.allUsers);
Router.get('/specific', verify, usersController.specificUser);
Router.post('/register', verify, validateUserEmail, validateUserPassword, handleValidationErrors, usersController.registerCashier);
Router.post('/login', validateUserPassword, handleValidationErrors, usersController.login);
Router.post('/recover-password', verify, validateUserEmail, validateUserPassword, handleValidationErrors, usersController.sendPasswordMail);
Router.patch("/update", verify, upload, usersController.updateImage);
Router.patch('/change-password', verify, validateUserPassword, handleValidationErrors, verify, usersController.resetPassword);
Router.patch('/update-role', verify, usersController.updateStatus);

module.exports = Router;