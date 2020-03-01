import React from 'react';
import CardWeatherDetails from "./CardWeatherDetail";

function Card({ selectedMarker }) {

    if (!selectedMarker) {
        return <h3>No location selected</h3>
    }


    console.log('Selected Marker: ', selectedMarker)


    return (
        <div>
            <CardWeatherDetails
                key={selectedMarker.id}
                id={selectedMarker.id}
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

export default Card