const express = require("express");
const Router = express.Router();

//* Import Controller
const { usersController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
const upload = require("./../middleware/upload");
const {validateUserEmail, validateUserPassword, handleValidationErrors} = require('./../middleware/validator');
const {verify} = require('./../lib/jwt');

Router.get('/user-list', usersController.allUsers);
Router.post('/register', validateUserEmail, validateUserPassword, handleValidationErrors, usersController.registerCashier);
Router.patch("/update", upload, usersController.updateImage);
Router.post('/login', validateUserPassword, handleValidationErrors, usersController.login);
Router.post('/recover-password', validateUserEmail, validateUserPassword, handleValidationErrors, usersController.sendPasswordMail);
Router.patch('/change-password/:id', validateUserPassword, handleValidationErrors, verify, usersController.resetPassword);
Router.patch('/update-role', verify, usersController.updateActive);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js