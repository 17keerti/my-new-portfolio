const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Technology extends Model {}

Technology.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "technology",
  }
);

module.exports = Technology;
