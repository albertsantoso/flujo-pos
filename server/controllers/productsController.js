const db = require("./../models");
const { sequelize } = require("./../models");

module.exports = {
    getAllProducts: async (req, res, next) => {
        try {
            const { search, category } = req.query;
            let queryString = `SELECT product_name, product_description, product_image, product_price, product_discount, category_name FROM products p
            JOIN categories c ON p.categoryId = c.id
            WHERE product_name LIKE :search `;

            const replacements = {
                search: `%${search}%`,
            };

            if (category) {
                queryString += `AND category_name = :category`;
                replacements.category = category;
            }

            const [rawQuery, metadata] = await sequelize.query(queryString, {
                replacements,
            });

            res.status(200).send({
                isError: false,
                message: "Get data success",
                data: rawQuery,
            });
        } catch (error) {
            next(error);
        }
    },
};
