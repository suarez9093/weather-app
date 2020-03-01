import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';


function SavedWeatherPoints() {
    const [savedWeather, setSavedWeather] = useState()

    useEffect(() => {
        loadWeather()
    }, [])

    function loadWeather() {
        API.getAllWeather()
            .then(res => {
                //  console.log('saved to state: ',res.data)
                setSavedWeather(res.data)
            })
    }

    function handleDeleteWeather(id) {
        API.deleteWeather(id).then(res => {
            loadWeather()
        })

    };



    console.log('savedWeather: ', typeof savedWeather)
    return (
        <div>
            {!savedWeather ? <h1>No saved Results</h1> :
                savedWeather.map(weather => (
                  
                    <Card>
                        <p>{weather.country}</p>
                        <CardBody key={weather.key}
                            id={weather.id}>
                            <CardTitle>Weather Detail</CardTitle>
                            <CardSubtitle>Country: {weather.country}</CardSubtitle>
                            <CardSubtitle>City: {weather.city}</CardSubtitle>
                            <CardText>Temp: {weather.temp}</CardText>
                            <CardText>Feels Like: {weather.feelsLike}</CardText>
                            <CardText>Latitude: {weather.latitude}</CardText>
                            <CardText>Longitude: {weather.longitude}</CardText>
                         <Button onClick={() => API.deleteWeather(weather.id).then(loadWeather())}>Delete this weather point</Button>
                        </CardBody>
                    </Card>
                ))}
        </div>
    )
}

export default SavedWeatherPoints