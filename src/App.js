import React, { useState } from 'react';
import { Container, Col, Row } from "reactstrap";
import ReactMapGL from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import API from "./utils/API"
import SearchBar from "./components/Searchbar"
import MarkerWeatherDetail from "./components/MarkerWeatherDetail"
import MarkerImage from "./components/MarkerImage"

function App() {
  // State
  // =====================================================
  const [selectedMarker, setSelectedMarker] = useState()
  const [markerCount, setMarkerCount] = useState()
  const [searchField, setSearchField] = useState()

  const [viewport, setViewPort] = useState({
    latitude: 35.5501, // needs to be dynamic
    longitude: -100.7821, // dynamic
    zoom: 3,
    width: '100vw',
    height: '60vh'
  })

  console.log('markerCount: ',markerCount)

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

  function onMarkerSelect(marker) {
    setSelectedMarker(marker)
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
          <MarkerWeatherDetail selectedMarker={selectedMarker} />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
