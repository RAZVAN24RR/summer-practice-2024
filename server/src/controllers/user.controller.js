const UserService = require("../services/user.service");

const { StatusCodes } = require("http-status-codes");

const registerUser = async (req, res) => {
  const { user, err } = await UserService.registerUser(req.body);
  if (user) {
    res.status(StatusCodes.CREATED).send();
  } else {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(StatusCodes.ACCEPTED).send(err.name);
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  }
};

const getUser = async (req, res) => {
  const jwt_id = req.params.id;
  const user = await UserService.getUser(jwt_id);
  if (user) {
    res.status(200).send(user);
  } else {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(400).send(err.name);
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  }
};

const getAllUsers = async (req, res) => {
  const users = await UserService.getAllUsers();
  if (users) {
    res.status(200).send(users);
  } else {
    res.status(400).send();
  }
};

const UserController = {
  registerUser,
  getUser,
  getAllUsers,
};

module.exports = UserController;
