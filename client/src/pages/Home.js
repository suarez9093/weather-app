import React, { useState, useEffect } from 'react';
import ReactMapGL from "react-map-gl"
import API from "../utils/API"
import MarkerWeatherDetail from "../components/Card"
import MapMarkerImage from "../components/MapMarkerImage"
import NavbarComponent from '../components/NavbarComponent'
const RANDOM_NUMBER_KEY = process.env.REACT_APP_RANDOM_API_KEY
const RANDOM_REF_KEY = process.env.REACT_APP_RANDOM_API_REF


function Home() {

  const [markerCount, setMarkerCount] = useState([])
  const [selectedMarker, setSelectedMarker] = useState({})
  const [searchField, setSearchField] = useState()
  // const [coordinates, setCoordinates] = useState()
  const [viewport, setViewPort] = useState({
    latitude: 35.5501, // needs to be dynamic
    longitude: -80.7821, // dynamic
    zoom: 1,
    width: '100vw',
    height: '60vh'
  })
  // console.log(coordinates)
  function handleInputChange(e) {
    const { value } = e.target
    setSearchField(value)
  }

  async function weatherSearch() {
    const count = await fetch(`https://randomapi.com/api/${RANDOM_REF_KEY}?key=${RANDOM_NUMBER_KEY}&results=${searchField}`)
    const toJson = await count.json()
    const latAndLon = await toJson.results
    
     setMarkerCount(latAndLon)

  }
 
  function handleFormSubmit(e) {
    e.preventDefault()
    const { value } = e.target
    setSearchField(value)
    weatherSearch()
  }

  async function onMarkerSelect(marker) {
    API.searchWeather(marker.lat, marker.lon)
    .then(res => {
      setSelectedMarker(res.data)

    })
  }

  return (
    <div>
      <NavbarComponent
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        searchField={searchField}
      />
      <ReactMapGL
        {...viewport}
        mapStyle={"mapbox://styles/suarez9093/ck773vm2e08i91iqi1m48zfss"}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        onViewportChange={setViewPort}
      >
        <MapMarkerImage
          onMarkerSelect={onMarkerSelect}
          markerCount={markerCount}
        />
      </ReactMapGL>

      <MarkerWeatherDetail selectedMarker={selectedMarker} />
    </div>
  )
};

export default Home;
