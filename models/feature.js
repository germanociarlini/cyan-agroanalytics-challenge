"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Feature.belongsTo(models.Collection, {
        foreignKey: "collection_id",
        onDelete: "CASCADE",
      });
    }
  }
  Feature.init(
    {
      collection_id: DataTypes.INTEGER,
      properties: DataTypes.JSON,
      geometry: DataTypes.GEOMETRY,
    },
    {
      sequelize,
      modelName: "Feature",
    }
  );
  return Feature;
};
