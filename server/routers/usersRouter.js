const express = require("express");
const Router = express.Router();

//* Import Controller
const { usersController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
const upload = require("./../middleware/upload");

Router.patch("/update", upload, usersController.updateImage);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
