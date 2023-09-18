'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ transaction }) {
      // define association here
      this.belongsTo(transaction, { foreignKey: "transactionId" })
    }
  }
  transaction_detail.init({
    product_id: DataTypes.INTEGER,
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  }, {
    sequelize,
    modelName: 'transaction_detail',
  });
  return transaction_detail;
};