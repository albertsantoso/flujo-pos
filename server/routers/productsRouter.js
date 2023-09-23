const express = require("express");
const Router = express.Router();

//* Import Controller
const { productsController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
const upload = require('./../middleware/upload')

Router.get("/all", productsController.getAllProducts);
Router.post("/", upload, productsController.createProduct);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
