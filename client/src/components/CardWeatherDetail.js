
import React from 'react';
import API from '../utils/API'
import {Card,CardText, CardBody,CardTitle, CardSubtitle,Button
} from 'reactstrap';

function CardWeatherDetail(props) {

function handleSaveWeather(event){
  console.log('props: ',props)
  event.preventDefault()
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
          <CardText><strong>Temp:</strong> {(((props.temp-273.15)*1.8)+32).toFixed(2)}</CardText>
          <CardText><strong>Feels Like:</strong> {(((props.feelsLike-273.15)*1.8)+32).toFixed(2)}</CardText>
          <CardText><strong>Latitude:</strong> {props.latitude}</CardText>
          <CardText><strong>Longitude:</strong> {props.longitude}</CardText>
          <Button  className="btn btn-primary btn-width"onClick={handleSaveWeather}>Save this Weather Point</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardWeatherDetail;
