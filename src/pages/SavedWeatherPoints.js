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
        alert('Deleted!')

    };



    // console.log('savedWeather: ', typeof savedWeather)
    return (
        <div>
            {!savedWeather ? <h1>No saved Results</h1> :
                savedWeather.map(weather => (

                    <Card key={weather._id}>
                        <CardBody>

                            <CardSubtitle><strong>Country:</strong> {weather.country}</CardSubtitle>
                            <CardSubtitle>City: {weather.city}</CardSubtitle>
                            <CardText>Temp: {weather.temp}</CardText>
                            <CardText>Feels Like: {weather.feelsLike}</CardText>
                            <CardText>Latitude: {weather.latitude}</CardText>
                            <CardText>Longitude: {weather.longitude}</CardText>
                           {/* <Link to={`/saved/${weather._id}`}>View city weather </Link> */}
                            <br />
                            <br />
                            
                            <Button color="danger" onClick={() => handleDeleteWeather(weather._id)}>Delete this weather point</Button>
                        </CardBody>
                    </Card>
                ))}
                {console.log(savedWeather)}
        </div>
    )
}

export default SavedWeatherPoints