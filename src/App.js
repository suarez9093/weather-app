import React, { useState, useEffect } from 'react';
// import Cards from "./components/Cards"
import { Container, Col, Row } from "reactstrap";
import ReactMapGL from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import API from "./utils/API"
import SearchBar from "./components/Searchbar"
import WeatherDetail from "./components/MarkerWeatherDetail"
import MarkerImage from "./components/MarkerImage"

function App() {
  // State
  // =====================================================
  const [locations, setLocations] = useState([])
  const [selectedMarker, setSelectedMarker] = useState()
  const [markerCount, setMarkerCount] = useState()
  const [searchField, setSearchField] = useState()

  const [viewport, setViewPort] = useState({
    latitude: 55.5, // needs to be dynamic
    longitude: 37.5, // dynamic
    zoom: 10,
    width: '100vw',
    height: '60vh'
  })

  console.log('markerCount: ',markerCount)

  // useEffect(() => {
  //   loadWeather()
  // }, [])

  // Functions
  // =====================================================

  function handleInputChange(e) {
      const { value } = e.target
      setSearchField(value)
  }
  

  function handleFormSubmit(e) {
    const { value } = e.target
    console.log('value',value)
    setSearchField(value)
    e.preventDefault()
    API.searchWeather(55, 37, searchField).then(res => setMarkerCount(res.data.list))
    setSearchField('')
  }
  // function loadWeather() {
  //   API.searchWeather(55.5, 37.5, 10)
  //     .then(res => res.data.list)
  //     .then(data => setLocations(data))
  //   console.log(locations)
  // }

  function onMarkerSelect(location) {
    setSelectedMarker(location)
  }

  // Content
  // =====================================================
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <SearchBar
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            searchField={searchField}
          />
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
            <MarkerImage
              onMarkerSelect={onMarkerSelect}
              // locations={locations}
              markerCount={markerCount}
            />

          </ReactMapGL>
        </Col>
      </Row>

      <Row>
        <Col>
          <WeatherDetail onMarkerSelect={onMarkerSelect} />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
