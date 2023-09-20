const db = require("./../models");
const { sequelize } = require("./../models");
const { Op } = require("sequelize");

module.exports = {
    createCart: async (req, res, next) => {
        try {
            const { productId, quantity, userId } = req.body;

            const createCart = await db.cart.create({
                productId,
                quantity,
                userId,
            });

            res.status(200).send({
                isError: false,
                message: "Create Cart Success",
                data: createCart,
            });
        } catch (error) {
            next(error);
        }
    },
    deleteCart: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const deleteCart = await db.cart.destroy({ where: { userId } });

            res.status(200).send({
                isError: false,
                message: "Delete Cart Success",
                data: deleteCart,
            });
        } catch (error) {
            next(error);
        }
    },
    getCart: async (req, res, next) => {
        try {
            const { userId } = req.params;

            const getCart = await db.cart.findAll({
                attributes: ["id", "quantity"],
                include: [
                    {
                        model: db.product,
                        attributes: [
                            "product_name",
                            "product_image",
                            "product_price",
                            "product_discount",
                        ],
                    },
                ],
                where: { userId },
            });

            res.status(200).send({
                isError: false,
                message: "Get Cart Success",
                data: getCart,
            });
        } catch (error) {
            next(error);
        }
    },
    updateCart: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { change } = req.query;

            const getCart = await db.cart.findOne({
                where: { id },
            });

            let quantity = Number(getCart.quantity);

            if (change === "add") {
                quantity += 1;
            } else if (change === "subtract") {
                quantity -= 1;
            }

            if (quantity === 0) {
                const deleteCart = await db.cart.destroy({ where: { id } });

                return res.status(200).send({
                    isError: false,
                    message: "Delete Cart Success",
                    data: deleteCart,
                });
            }

            console.log(quantity, id);
            const updateCart = await db.cart.update(
                {
                    quantity: quantity,
                },
                { where: { id } }
            );

            res.status(200).send({
                isError: false,
                message: "Update Cart Success",
                data: null,
            });
        } catch (error) {
            console.log(error);
        }
    },
};
