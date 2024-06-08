const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const initRoutes = require("./src/routes");
require("dotenv").config();

app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  })
);
app.use(helmet());
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.disable("etag");

const httpServer = require("http").createServer(app);

const HTTP_PORT = process.env.PORT || 3001;
app.get("/h", (req, res) => res.send("HI!"));

initRoutes(app);

httpServer.listen(HTTP_PORT, () => {
  console.log(`Listening on Port: ${HTTP_PORT}!`);
});

module.exports = {
  app,
};
