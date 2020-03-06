
// Dependencies
const express = require('express');
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose')
const routes = require('./routes')
// const path = require('path')
require('./client/node_modules/dotenv').config()
const app = express();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// If the NODE_ENV environment variable is in production use the static files in client/build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}  

// app.use(express.static(path.join(__dirname, "client/build")));

// Use the defined api routes
app.use(routes)

// Connect to the mongoose db.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weatherApp",  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// Listen on the the enviornment variable that is defined in the deployed enviornment that it is in or use port 3000
app.listen(PORT, () =>
  console.log('Express server is running on localhost:3001')
);

