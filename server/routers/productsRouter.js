const express = require("express");
const Router = express.Router();

//* Import Controller
const { productsController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
const upload = require("./../middleware/upload");
const { verify } = require("./../lib/jwt");

Router.get("/all", verify, productsController.getAllProducts);
Router.post("/", verify, upload, productsController.createProduct);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
