const express = require("express");

const UserController = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/", UserController.registerUser);
userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/:id", UserController.getUser);

module.exports = userRouter;
