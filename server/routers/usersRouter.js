const express = require("express");
const Router = express.Router();

//* Import Controller
const { usersController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
const upload = require("./../middleware/upload");
const {validateUserEmail, validateUserPassword, handleValidationErrors} = require('./../middleware/validator');
const {verify} = require('./../lib/jwt');

Router.patch("/update", upload, usersController.updateImage);

Router.post('/login', validateUserPassword, handleValidationErrors, usersController.login);
Router.post('/recoverpassword', validateUserEmail, validateUserPassword, handleValidationErrors, usersController.sendPasswordMail);

Router.patch('/changepassword/:id', validateUserPassword, handleValidationErrors, verify, usersController.resetPassword);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js