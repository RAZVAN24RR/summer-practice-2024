const { SALT } = require("../konst");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../konst");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const sequelize = require("sequelize");

const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};

const registerUser = async (userData) => {
  try {
    userData.password = bcrypt.hashSync(userData.password, SALT); // Asigură-te că parola este hash-uită
    const user = await User.create(userData);
    return { user, err: null };
  } catch (err) {
    console.error(err);
    return { user: null, err };
  }
};

const getUser = async (jwtId) => {
  try {
    const decoded = decodeToken(jwtId);
    if (!decoded) {
      return { user: null, err: "Invalid token" };
    }
    const user = await User.findOne({ where: { id: decoded.userId } });
    if (user) {
      return { user, err: null };
    } else {
      return { user: null, err: "User not found" };
    }
  } catch (err) {
    console.log(err);
    return { user: null, err };
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    console.log(users);
    return users;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const UserService = {
  registerUser,
  getUser,
  getAllUsers,
};

module.exports = UserService;
