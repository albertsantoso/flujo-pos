const express = require("express");
const Router = express.Router();

//* Import Controller
const { transactionsController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
// kosong

Router.post("/", transactionsController.createTransaction);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
