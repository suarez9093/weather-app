import axios from "axios"
const endpoint = "http://api.openweathermap.org/data/2.5/find?"
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


export default {
    
    // Search for weather
    searchWeather: (lat, lon, count) => {
        const coordinates = `lat=${lat}&lon=${lon}&cnt=${count}`
        const URL = endpoint + coordinates + "&appid=" + API_KEY
     
        return axios.get(URL);
    },
    // Saves weather to the saved weather point page
    saveWeather: function (weatherData) {
        console.log('API SaveWeather: ',weatherData);
        return axios.post("/api/weather", weatherData);
    },
    // Gets all saved weather
    getAllWeather: function () {
        return axios.get("/api/weather");
    },
    // Gets the weather with the given id
    getWeather: function (id) {
        return axios.get("/api/weather/" + id);
    },
    // Deletes the weather with the given id
    deleteWeather: function (id) {
        return axios.delete("/api/weather/" + id);
    }
};

