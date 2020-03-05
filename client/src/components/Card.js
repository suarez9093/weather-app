import React from 'react';
import CardWeatherDetails from "./CardWeatherDetail";

function Card({ selectedMarker }) {
    console.log('selectedmarker', selectedMarker)
    // if (!selectedMarker) {
    //     return <h3>No location selected</h3>
    // }
    return (
        <div>
            {selectedMarker.main ?
                <CardWeatherDetails
                    key={selectedMarker.id}
                    id={selectedMarker.id}
                    name={selectedMarker.name}
                    temp={selectedMarker.main.temp}
                    feelsLike={selectedMarker.main.feels_like}
                    latitude={selectedMarker.coord.lat}
                    longitude={selectedMarker.coord.lon}
                    country={selectedMarker.sys.country}
                    selectedMarker={selectedMarker}
                /> : <h1>No Location selected</h1>
            }

        </div>
    )
}

export default Card