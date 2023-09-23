const express = require("express");
const Router = express.Router();

//* Import Controller
const { transactionsController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
const { verify } = require("./../lib/jwt");

Router.post("/", verify, transactionsController.createTransaction);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
