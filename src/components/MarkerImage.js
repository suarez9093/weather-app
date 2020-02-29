import React from 'react';
import { Marker } from "react-map-gl"
import image from "./img/marker.jpg"

function MarkerImage({locations, onMarkerSelect}){

    return(
        <div>
            {locations.map(l => (
              <Marker 
              key={l.id}
              latitude={l.coord.lat} 
              longitude={l.coord.lon} 
              offsetLeft={-20} 
              offsetTop={-10}>
              <button onClick={() => onMarkerSelect(l)}>
                <img className="pointer" src={image} alt="pointer" />
              </button>
            </Marker>
            ))}
        </div>
    
    )
}

export default MarkerImage