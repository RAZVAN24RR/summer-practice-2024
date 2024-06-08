const express = require("express");
const sessionRouter = express.Router();
const SessionController = require("./../controllers/session.controller");

const isAuth = require("../middlewares/auth.middleware");

sessionRouter.post("/", SessionController.createSession);

module.exports = sessionRouter;
