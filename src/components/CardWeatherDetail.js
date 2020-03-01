
import React from 'react';
import API from '../utils/API'
import {Card,CardText, CardBody,CardTitle, CardSubtitle,Button
} from 'reactstrap';

function CardWeatherDetail(props) {
console.log('incoming CardWeatherDetail props: ',props)

function handleSaveWeather(event){
  event.preventDefault()
  API.saveWeather(props.selectedMarker).then(res => console.log(res, 'has been saved'))
  .then(res => console.log('save: res' , res))
  .catch(err => console.log('Error: ',err))
}

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Weather Detail</CardTitle>
          <CardSubtitle>Country: {props.country}</CardSubtitle>
          <CardSubtitle>City: {props.name}</CardSubtitle>
          <CardText>Temp: {props.temp}</CardText>
          <CardText>Feels Like: {props.feelsLike}</CardText>
          <CardText>Latitude: {props.latitude}</CardText>
          <CardText>Longitude: {props.longitude}</CardText>
          <Button onClick={handleSaveWeather}>Save this Weather Point</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardWeatherDetail;