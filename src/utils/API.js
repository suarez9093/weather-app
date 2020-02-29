import axios from "axios"

// const endpoint = "http://api.openweathermap.org/data/2.5/weather?"
// const endpoint = "http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10"
const endpoint = "http://api.openweathermap.org/data/2.5/find?"
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export default {
    
    // Search for books
    searchWeather: (lat, lon, count) => {
        const coordinates = `lat=${lat}&lon=${lon}&cnt=${count}`
        const URL = endpoint + coordinates + "&appid=" + API_KEY
        console.log('URL: ',URL)
        console.log(lat,lon);
        
        return axios.get(URL);
    },
    // Saves a book to the database
    saveWeather: function (weatherData) {
        console.log(weatherData);
        return axios.post("/api/weather", weatherData);
    },
    // Gets all saved weather
    getAllWeather: function () {
        return axios.get("/api/weather");
    },
    // Gets the book with the given id
    getWeather: function (id) {
        return axios.get("/api/weather/" + id);
    },
    // Deletes the book with the given id
    deleteWeather: function (id) {
        return axios.delete("/api/weather/" + id);
    }
};