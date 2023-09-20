const express = require("express");
const Router = express.Router();

//* Import Controller
const { cartsController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
// kosong

Router.post("/", cartsController.createCart);
Router.delete("/:userId", cartsController.deleteCart);
Router.get("/:userId", cartsController.getCart);
Router.patch("/:id", cartsController.updateCart);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
