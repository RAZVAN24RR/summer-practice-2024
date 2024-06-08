const sequelize = require("sequelize");
const { SALT } = require("../konst");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Series = sequelize.define(
    "Series",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idOwner: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT("long"),
      },
    },
    {
      timestamps: false,
    }
  );

  return Series;
};
