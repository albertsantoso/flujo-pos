const db = require("./../models");
const { sequelize } = require("./../models");
const { Op } = require("sequelize");

module.exports = {
    createTransaction: async (req, res, next) => {
        const t = await sequelize.transaction();
        try {
            const { total_amount, total_amount_with_tax, userId, products } =
                req.body;
            const createTransaction = await db.transaction.create(
                { total_amount, total_amount_with_tax, userId },
                { transaction: t }
            );

            const data_products = products.map((v) => {
                return {
                    productId: v.productId,
                    checked_out_product_price: v.checked_out_product_price,
                    quantity: v.quantity,
                    transactionId: createTransaction.id,
                };
            });
            console.log(data_products);
            await db.transaction_detail.bulkCreate(data_products, {
                transaction: t,
            });

            await db.cart.destroy({ where: { userId } });

            await t.commit();
            res.status(200).send({
                isError: false,
                message: "Create Transaction Success",
                data: null,
            });
        } catch (error) {
            await t.rollback();
            next(error);
        }
    },
};
