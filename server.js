const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, 'build')))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}  


app.listen(PORT, () =>
  console.log('Express server is running on localhost:3001')
);