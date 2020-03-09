import React from 'react';
import CardWeatherDetails from "./CardWeatherDetail";

function Card({ selectedMarker }) {
    return (
        <div>
            {/* If there is a MapMarker Image selected then the CardWeatherDetais Component is rendered and the following information is passed down to the CardWeatherDetails Component */}
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
                    // Otherwise if there is not a selectedMarker then the following tag is rendered
                /> : <h1>No Location selected</h1>
            }

        </div>
    )
}

export default Card