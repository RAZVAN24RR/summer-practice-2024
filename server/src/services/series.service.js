const { Series } = require("../models");

const addSeries = async (seriesData) => {
  try {
    console.log(seriesData);
    const series = await Series.create(seriesData);
    return series;
  } catch (err) {
    console.log(err);
    return series;
  }
};

const getSeries = async (id) => {
  try {
    const series = await Series.findOne(id);
    if (series) return series;
    else return null;
  } catch (err) {
    console.log(err);
    return { user: null, err };
  }
};

const getAllSeries = async () => {
  try {
    const series = await Series.findAll();
    console.log(series);
    return series;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const SeriesService = {
  addSeries,
  getSeries,
  getAllSeries,
};
module.exports = SeriesService;
