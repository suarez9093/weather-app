import React, {useState, useEffect} from 'react';
import API from '../utils/API'
import {Card,CardText, CardBody,CardTitle, CardSubtitle,Button
} from 'reactstrap';


function SavedWeatherPoints(){
const [savedWeather, setSavedWeather] = useState({})

useEffect(() => {
    loadWeather()
},[])

function loadWeather(){
 API.getAllWeather()
 .then(res => {
     console.log('saved to state: ',res.data)
     setSavedWeather(res.data)
 })
}



// console.log('savedWeather: ',savedWeather.data)
    return(
        <div>
          {savedWeather.map(weather => console.log(weather))}
        </div>
    )
}

export default SavedWeatherPoints