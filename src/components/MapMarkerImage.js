import React from 'react';
import { Marker } from "react-map-gl"
import image from "./img/marker.png"

function MapMarkerImage({ markerCount, onMarkerSelect }) {

    return (
        <div>
            {!markerCount ? null :
                markerCount.map(marker => (
                    <Marker
                        key={marker.id}
                        latitude={marker.coord.lat}
                        longitude={marker.coord.lon}
                        offsetLeft={-20}
                        offsetTop={-10}>
                        <button onClick={() => onMarkerSelect(marker)}>
                            <img className="pointer" src={image} alt="pointer" />
                        </button>
                    </Marker>
                ))
            }
        </div>

    )
}

export default MapMarkerImage