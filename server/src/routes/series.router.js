const express = require("express");
const SeriesController = require("../controllers/series.controller");

const seriesRouter = express.Router();

seriesRouter.post("/", SeriesController.addSeries);
seriesRouter.get("/all", SeriesController.getAllSeries);
seriesRouter.get("/:id", SeriesController.getSeries);

module.exports = seriesRouter;
