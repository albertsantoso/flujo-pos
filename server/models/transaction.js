'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ user, transaction_detail }) {
      // define association here
      this.belongsTo(user, { foreignKey: "userId" });
      this.hasMany(transaction_detail, { foreignKey: "transactionId" })
    }
  }
  transaction.init({
    total_amount: DataTypes.INTEGER,
    total_amount_with_tax: DataTypes.INTEGER,
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
    modelName: 'transaction',
  });
  return transaction;
};