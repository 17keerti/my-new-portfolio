const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ProjectTechnology extends Model {}

ProjectTechnology.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "project",
        key: "id",
      },
    },

    technology_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "technology",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "projecttechnology",
  }
);

module.exports = ProjectTechnology;
