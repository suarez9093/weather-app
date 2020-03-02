import React, { useState, useEffect } from 'react';
import API from '../utils/API'
import {
    Card, CardText, CardBody, Button
} from 'reactstrap';
import NavbarComponent from '../components/NavbarComponent'

function SavedWeatherPoints() {
    const [savedWeather, setSavedWeather] = useState()
    console.log(savedWeather)
    useEffect(() => {
        loadWeather()
    }, [])

    function loadWeather() {
        API.getAllWeather()
            .then(res => {
                setSavedWeather(res.data)
            })
    }

    function handleDeleteWeather(id) {
        API.deleteWeather(id).then(res => {
            loadWeather()
        })
        alert('Deleted!')

    };

    return (
        <div>
            <NavbarComponent />
            {!savedWeather ? <h1>No saved Results</h1> :
                savedWeather.map(weather => (

                    <Card key={weather._id}>
                        <CardBody>
                            <CardText><strong>Country:</strong> {weather.country}</CardText>
                            <CardText><strong>City:</strong> {weather.city}</CardText>
                            <CardText><strong>Temp:</strong> {(((weather.temp - 273.15) * 1.8) + 32).toFixed(2)}°</CardText>
                            <CardText><strong>Feels Like:</strong> {(((weather.feelsLike - 273.15) * 1.8) + 32).toFixed(2)}°</CardText>
                            <br />
                            <br />

                            <Button className="btn-width" color="danger" onClick={() => handleDeleteWeather(weather._id)}>Delete this weather point</Button>
                        </CardBody>
                    </Card>

                ))}
        </div>
    )
}

export default SavedWeatherPoints