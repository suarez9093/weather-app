import React from 'react';
import mapboxgl from 'mapbox-gl';
require('dotenv').config()

const mapKey = process.env.REACT_APP_MAPBOX_API_KEY

class MapBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 2
        };
    }
    componentDidMount() {
        mapboxgl.accessToken = mapKey;
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }
    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} className="mapContainer container" />
            </div>
        )
    }
}

export default MapBox;