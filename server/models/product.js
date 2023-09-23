"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ category, cart, transaction_detail }) {
            // define association here
            this.belongsTo(category, { foreignKey: "categoryId" });
            this.hasMany(cart, { foreignKey: "productId" });
            this.hasMany(transaction_detail, { foreignKey: "productId" });
        }
    }
    product.init({
        product_name: DataTypes.STRING,
        product_description: DataTypes.TEXT,
        product_image: {
            type: DataTypes.STRING,
            defaultValue: "public/default/flujo.png"
        },
        product_price: DataTypes.INTEGER,
        product_discount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        status: {
            type: DataTypes.ENUM("Active", "Deactive"),
            defaultValue: "Active",
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        },
    },
        {
            sequelize,
            modelName: "product",
        }
    );
    return product;
};
