import React from 'react';
import API from '../utils/API';
import {
  Card, CardText, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';

function CardWeatherDetail(props) {

  // When the 'Save this Weather Point' button is clicked
  function handleSaveWeather(event) {
    // Prevent defaulft for to prevent the page from rerendering
    event.preventDefault()
    // make an axios call to save this weather point to the db
    API.saveWeather({
      id: props.id,
      country: props.country,
      city: props.name,
      latitude: props.latitude,
      longitude: props.longitude,
      temp: props.temp,
      feelsLike: props.feelsLike,
      dateAdded: Date.now()
    })
    alert(`Saved ${props.name}!`)
  }

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle><strong>Weather Detail</strong></CardTitle>
          <CardSubtitle><strong>Country:</strong> {props.country}</CardSubtitle>
          <CardSubtitle><strong>City:</strong> {props.name}</CardSubtitle>
          <CardText><strong>Temp:</strong> {(((props.temp - 273.15) * 1.8) + 32).toFixed(2)}°</CardText>
          <CardText><strong>Feels Like:</strong> {(((props.feelsLike - 273.15) * 1.8) + 32).toFixed(2)}°</CardText>
          <CardText><strong>Latitude:</strong> {props.latitude}</CardText>
          <CardText><strong>Longitude:</strong> {props.longitude}</CardText>
        </CardBody>
      </Card>
      <button className="btn btn-primary btn-width" onClick={handleSaveWeather}>Save this Weather Point</button>
    </div>
  );
};

export default CardWeatherDetail;
