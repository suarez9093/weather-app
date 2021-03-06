import React from 'react';
import { Marker } from "react-map-gl"
import { faCloud } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MapMarkerImage({ markerCount, onMarkerSelect }) {
    return (
        <div>
            {!markerCount ? null :
                markerCount.map(marker => (
                    <Marker
                        key={marker.id}
                        latitude={marker.lat}
                        longitude={marker.lon}
                        offsetLeft={-20}
                        offsetTop={-10}>
                        <button onClick={() => onMarkerSelect(marker)}>
                            <FontAwesomeIcon className="font-awesome-icon" icon={faCloud} />
                        </button>
                    </Marker>
                ))
            }
        </div>
    )
}
export default MapMarkerImage