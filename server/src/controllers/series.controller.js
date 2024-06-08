const SeriesService = require("../services/series.service");
const { StatusCodes } = require("http-status-codes");

const addSeries = async (req, res) => {
  const serie = await SeriesService.addSeries(req.body);
  if (serie) {
    res.status(StatusCodes.CREATED).send(serie);
  } else {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(StatusCodes.ACCEPTED).send(err.name);
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  }
};

const getSeries = async (req, res) => {
  const id = req.params.id;
  const { serie, err } = await SeriesService.getSeries(id);
  if (serie) {
    res.status(StatusCodes.CREATED).send(serie);
  } else {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(StatusCodes.ACCEPTED).send(err.name);
    } else {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send();
    }
  }
};

const getAllSeries = async (req, res) => {
  const series = await SeriesService.getAllSeries();
  if (series) {
    res.status(200).send(series);
  } else {
    res.status(400).send();
  }
};

const SeriesController = {
  addSeries,
  getSeries,
  getAllSeries,
};
module.exports = SeriesController;
