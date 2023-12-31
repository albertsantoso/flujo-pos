const express = require("express");
const Router = express.Router();

//* Import Controller
const { productsController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
const upload = require("./../middleware/upload");
const { verify } = require("./../lib/jwt");

Router.get("/all", verify, productsController.getAllProducts);
Router.get("/:productId", productsController.getProduct);
Router.post("/", verify, upload, productsController.createProduct);
Router.patch("/:productId", verify, upload, productsController.updateProduct);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
