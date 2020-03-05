const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  country: { type: String },
  city: { type: String},
  latitude: {type: Number},
  longitude: {type: Number},
  temp: {type: Number},
  feelsLike: { type: String },
  dateAdded: { type: Date, default: Date.now }
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;
