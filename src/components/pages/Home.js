import React, { useState } from 'react';
import ReactMapGL from "react-map-gl"
import API from "../../utils/API"
import SearchBar from "../Searchbar"
import MarkerWeatherDetail from "../Card"
import MapMarkerImage from "..//MapMarkerImage"


function Home() {
  const [markerCount, setMarkerCount] = useState()
  const [selectedMarker, setSelectedMarker] = useState()
  const [searchField, setSearchField] = useState()
  const [viewport, setViewPort] = useState({
    latitude: 35.5501, // needs to be dynamic
    longitude: -80.7821, // dynamic
    zoom: 1,
    width: '100vw',
    height: '60vh'
  })

  function handleInputChange(e) {
    const { value } = e.target
    setSearchField(value)
  }

  function weatherSearch() {
    API.searchWeather(50, 30, searchField)
      .then(res => {
        setMarkerCount(res.data.list)
      })
    setSearchField('')
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    const { value } = e.target
    console.log('value', value)
    setSearchField(value)
    weatherSearch()
  }

  function onMarkerSelect(marker) {
    setSelectedMarker(marker)
  }

  return (
    <div>
      <SearchBar
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
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
