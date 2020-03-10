 <h3 align="center">Weather Point</h3>
 
![Project Name](gif/weatherpoint.gif)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  
  </a>
  <p align="center">
    A REST api application that returns a number of lat and long points with weather data.
    <br />
    <br />
    <a href="https://dry-cliffs-65340.herokuapp.com/"> Live Demo Coming Soon</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

An app that allows you to search random weather points.

### Built With

- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React-Map-GL](https://uber.github.io/react-map-gl/)
- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Open Weather Map](https://openweathermap.org/api)
- [Random API](https://randomapi.com/)

## Getting Started

- Clone the repo
- Run "npm install"
- Run "mongod"
- Run "npm run start"

For this app to run properly, you will need to create a .env file at the root of the project containing these key/val pairs:

REACT_APP_MAPBOX_API_KEY (a Mabox API key)
REACT_APP_WEATHER_KEY (a Open Weather API key).
REACT_APP_RANDOM_NUMBER_KEY = (Random API key)
REACT_APP_RANDOM_REF_KEY = (Random API ref key)

When using the Random api you will need to build your api in the following way to make this work:

api.lat = random.numeric(-90, 90);
api.lon = random.numeric(-180,80)

<!-- CONTACT -->

## Contact

Alex Suarez - [LinkedIn](https://www.linkedin.com/in/alexsuarez9093/) - suarez9093@hotmail.com
