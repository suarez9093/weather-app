const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weatherSchema = new Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  latitude: {type: Number, required: true},
  longitude: {type: Number, required: true},
  temp: {type: Number},
  feelsLike: { type: String },
  dateAdded: { type: Date, default: Date.now }
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;
