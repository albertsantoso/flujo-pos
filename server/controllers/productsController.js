const db = require("./../models");
const { sequelize } = require("./../models");
const { Op } = require("sequelize");

module.exports = {
    getAllProducts: async (req, res, next) => {
        try {
            const { search, category, sortName, sortPrice } = req.query;

            const selectedAttributes = [
                "product_name",
                "product_description",
                "product_image",
                "product_price",
                "product_discount",
            ];

            const categoryInclude = {
                model: db.category,
                attributes: ["category_name"],
            };

            if (category) {
                categoryInclude.where = {
                    category_name: category,
                };
            }

            const orderOptions = [];

            if (sortName) {
                if (sortName === "asc") {
                    orderOptions.push(["product_name", "ASC"]);
                } else if (sortName === "desc") {
                    orderOptions.push(["product_name", "DESC"]);
                }
            }
            if (sortPrice) {
                if (sortPrice === "asc") {
                    orderOptions.push(["product_price", "ASC"]);
                } else if (sortPrice === "desc") {
                    orderOptions.push(["product_price", "DESC"]);
                }
            }

            const baseQuery = {
                attributes: selectedAttributes,
                include: [categoryInclude],
                where: {
                    product_name: {
                        [Op.like]: `%${search}%`,
                    },
                },
                limit: 10,
                order: orderOptions,
            };

            const gpt = await db.product.findAll(baseQuery);
            res.status(200).send({
                isError: false,
                message: "Get data success",
                data: gpt,
            });
        } catch (error) {
            next(error);
        }
    },
};
