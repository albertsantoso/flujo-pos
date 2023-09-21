const express = require("express");
const Router = express.Router();

//* Import Controller
const { productsController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
// kosong

Router.get("/all", productsController.getAllProducts);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
