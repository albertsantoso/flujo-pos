'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ cart, transaction }) {
      // define association here
      this.hasMany(cart, { foreignKey: "userId" });
      this.hasMany(transaction, { foreignKey: "userId" });
    }
  }
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM("Active", "Disabled"),
      defaultValue: "Disabled"
    },
    role: {
      type: DataTypes.ENUM("Cashier", "Admin"),
      defaultValue: "Cashier"
    },
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
    modelName: 'user',
  });
  return user;
};