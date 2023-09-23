const express = require("express");
const Router = express.Router();

//* Import Controller
const { cartsController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
const { verify } = require("./../lib/jwt");

Router.post("/", verify, cartsController.createCart);
Router.delete("/:id", verify, cartsController.deleteCart);
Router.delete("/all/:userId", verify, cartsController.deleteAllCart);
Router.get("/:userId", verify, cartsController.getCart);
Router.patch("/:id", verify, cartsController.updateCart);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
