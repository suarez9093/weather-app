
import React from 'react';
import {
  Card,
  // CardImg, 

  CardText, CardBody,
  CardTitle, CardSubtitle,
  // Button
} from 'reactstrap';

function Cards(props) {
  return (
    <div>
      <Card>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>Weather Detail</CardTitle>
          <CardSubtitle>Country: {props.country}</CardSubtitle>
          <CardSubtitle>City: {props.name}</CardSubtitle>
          <CardText>Temp: {props.temp}</CardText>
          <CardText>Feels Like: {props.feelsLike}</CardText>
          <CardText>Latitude: {props.latitude}</CardText>
          <CardText>Longitude: {props.longitude}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Cards;