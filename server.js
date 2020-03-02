const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose')
const routes = require('./routes')
const path = require('path')
require('./client/node_modules/dotenv').config()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

}  

app.use(routes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/weatherApp",  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


app.listen(PORT, () =>
  console.log('Express server is running on localhost:3001')
);

