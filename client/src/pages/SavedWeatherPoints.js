import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { Card, CardText, CardBody, Button } from 'reactstrap';
import NavbarComponent from '../components/NavbarComponent';

function SavedWeatherPoints() {
    const [savedWeather, setSavedWeather] = useState()

    // on first render load run the loadWeather function
    useEffect(() => {
        loadWeather()
    }, [])

    // Makes a call to axios to get all the weather that was saved and save to savedWeather state.
    async function loadWeather() {
        const result = await API.getAllWeather()
        setSavedWeather(result.data)
    }

    // make an axios call to delete a weather point
    function handleDeleteWeather(id) {
        API.deleteWeather(id).then(res => {
            loadWeather();
        })
        alert('Deleted!')
    };
    console.log('savedWeather: ', savedWeather)
    return (
        <div>
            <NavbarComponent />
            {/* If there is no weather points saved in state then component will render this h1 tag */}
            {!savedWeather ? <h1>No saved Results</h1> :
                // otherwise the component will map over all the savedWeather saved in state and for everyone in the array it will generate a Card with the following information
                savedWeather.map(weather => (
                    <Card key={weather._id}>
                        <CardBody>
                            <CardText><strong>Country:</strong> {!weather.country ? 'N/A' : weather.country}</CardText>
                            <CardText><strong>City:</strong> {!weather.city ? 'N/A' : weather.city}</CardText>
                            {/* Converts to farenheight */}
                            <CardText><strong>Temp:</strong> {(((weather.temp - 273.15) * 1.8) + 32).toFixed(2)}°</CardText>
                            <CardText><strong>Feels Like:</strong> {(((weather.feelsLike - 273.15) * 1.8) + 32).toFixed(2)}°</CardText>
                <CardText><strong>Latitude:</strong> {weather.latitude} </CardText>
                <CardText><strong>Longitude:</strong> {weather.longitude} </CardText>
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