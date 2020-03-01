import React from 'react';
import Cards from "./Cards"

function WeatherDetail({selectedMarker}){

    if(!selectedMarker) {
        return <h3>No location selected</h3>
    }
    console.log('Selected Marker: ', selectedMarker)

    // console.log('Selected Marker',onMarkerSelect)
    return(
        <div>
            <Cards
            key={selectedMarker.id}
            name={selectedMarker.name}
            temp={selectedMarker.main.temp}
            feelsLike={selectedMarker.main.feels_like}
            latitude={selectedMarker.coord.lat}
            longitude={selectedMarker.coord.lon}
            country={selectedMarker.sys.country}

            />       
        </div>
    )
}

export default WeatherDetail