import React, {useState, useEffect} from 'react';
import API from '../../utils/API'

function SavedWeatherPoints(){
const [savedWeather, setSavedWeather] = useState()

useEffect(() => {
    loadWeather()
},[])

function loadWeather(){
    API.getWeather()
        .then(res => setSavedWeather(res))
}

console.log('savedWeather: ',savedWeather)
    return(
        <div>
            {savedWeather}
        </div>
    )
}

export default SavedWeatherPoints