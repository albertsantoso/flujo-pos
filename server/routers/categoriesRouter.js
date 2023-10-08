const express = require("express");
const Router = express.Router();

//* Import Controller
const { categoriesController } = require("../controllers"); // otomatis baca index.js

//* Import Middleware
const { verify } = require("./../lib/jwt");

Router.get("/", verify, categoriesController.getAllCategories);
Router.post("/", verify, categoriesController.addCategory);
Router.delete("/:categoryId", verify, categoriesController.deleteCategory);
Router.patch("/:categoryId", verify, categoriesController.updateCategory);

module.exports = Router; // pake module.exports karena ga ada librarynya, bawaan dari js
