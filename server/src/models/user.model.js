const sequelize = require("sequelize");
const { SALT } = require("../konst");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.TEXT("long"),
      },
    },
    {
      timestamps: false,
    }
  );
  User.beforeCreate((user, options) => {
    const hashedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = hashedPassword;
  });
  return User;
};
