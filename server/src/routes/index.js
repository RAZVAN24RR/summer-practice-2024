const express = require("express");

function initRoutes(app) {
  const PREFIX = "/api/v1";
  app.use(`${PREFIX}/user`, require("./user.router"));
  app.use(`${PREFIX}/session`, require("./session.router"));
  app.use(`${PREFIX}/series`, require("./series.router"));
}

module.exports = initRoutes;
