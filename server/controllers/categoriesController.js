const db = require("./../models");
const { sequelize } = require("./../models");
const { Op } = require("sequelize");

module.exports = {
    getAllCategories: async (req, res, next) => {
        try {
            const categories = await db.category.findAll();
            
            res.status(200).send({
                isError: false,
                message: "Get data success",
                data: categories,
            });
        } catch (error) {
            next(error);
        }
    },
};
