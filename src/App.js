import React, { useState, useEffect } from 'react';
import Cards from "./components/Cards"
import { Container, Col, Row } from "reactstrap";
import ReactMapGL, { Marker } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import API from "./utils/API"
import SearchBar from "./components/Searchbar"
import WeatherDetail from "./components/MarkerWeatherDetail"
import MarkerImage from "./components/MarkerImage"

function App() {
  const [locations, setLocations] = useState([])
  const [ selectedMarker, setSelectedMarker ] = useState()

  const [viewport, setViewPort] = useState({
    latitude: 55.5,
    longitude: 37.5,
    zoom: 10,
    width: '100vw',
    height: '60vh'
  })

  useEffect(() => {
    loadWeather()
  }, [])

  function onMarkerSelect(location){
    setSelectedMarker(location)
  }
  function loadWeather() {
    API.searchWeather(55.5, 37.5, 10)
      .then(res => res.data.list)
      .then(data => setLocations(data))
      console.log(locations)
  }

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <SearchBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <ReactMapGL
            {...viewport}
            mapStyle={"mapbox://styles/suarez9093/ck773vm2e08i91iqi1m48zfss"}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
            onViewportChange={setViewPort}
          >
            <MarkerImage onMarkerSelect ={onMarkerSelect}locations={locations}/>
  
          </ReactMapGL>
        </Col>
      </Row>
      <Col>
        {/* <Cards className="border" /> */}
        {locations.map(data => console.log(data))}
      </Col>
      <Row>
        <Col>
        <WeatherDetail onMarkerSelect={onMarkerSelect}/>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
