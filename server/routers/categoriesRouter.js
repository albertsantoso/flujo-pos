const express = require("express");
const Router = express.Router();

//* Import Controller
const { categoriesController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
const { verify } = require("./../lib/jwt");

Router.get("/", verify, categoriesController.getAllCategories);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
