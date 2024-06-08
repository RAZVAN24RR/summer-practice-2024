const { StatusCodes } = require("http-status-codes");
const SessionService = require("../services/session.service");

const createSession = async (req, res) => {
  const { token, err } = await SessionService.createSession(
    req.body.email,
    req.body.password
  );

  if (token) {
    res.status(StatusCodes.ACCEPTED).send(token);
  } else {
    res.status(404).send(err);
  }
};

const SessionController = {
  createSession,
};
module.exports = SessionController;
