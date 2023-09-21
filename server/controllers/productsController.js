const db = require("./../models");
const { sequelize } = require("./../models");
const { Op } = require("sequelize");

module.exports = {
    getAllProducts: async (req, res, next) => {
        try {
            const { search, category, orderField, orderDirection, offset } =
                req.query;

            const selectedAttributes = [
                "id",
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

            if (orderField && orderDirection) {
                orderOptions.push([orderField, orderDirection]);
            }

            const baseQuery = {
                attributes: selectedAttributes,
                include: [categoryInclude],
                limit: 10,
                order: orderOptions,
            };

            if (search) {
                baseQuery.where = {
                    product_name: {
                        [Op.like]: `%${search}%`,
                    },
                };
            }

            if (offset) {
                baseQuery.offset = Number(offset);
            }

            const findProducts = await db.product.findAll(baseQuery);
            res.status(200).send({
                isError: false,
                message: "Get data success",
                data: findProducts,
            });
        } catch (error) {
            next(error);
        }
    },
};
