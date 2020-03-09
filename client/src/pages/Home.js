import React, { useState } from 'react';
import ReactMapGL from "react-map-gl"
import API from "../utils/API"
import Card from "../components/Card"
import MapMarkerImage from "../components/MapMarkerImage"
import NavbarComponent from '../components/NavbarComponent'
const RANDOM_NUMBER_KEY = process.env.REACT_APP_RANDOM_API_KEY
const RANDOM_REF_KEY = process.env.REACT_APP_RANDOM_API_REF

function Home() {
  // Setting the state
  const [markerCount, setMarkerCount] = useState([])
  const [selectedMarker, setSelectedMarker] = useState({})
  const [searchField, setSearchField] = useState()
  const [viewport, setViewPort] = useState({
    // Setting the inital view of the map
    latitude: 35.5501,
    longitude: -80.7821,
    zoom: 1,
    width: '100vw',
    height: '60vh'
  })

  // Functions 
  // =====================================================

  // Grabs the value that was put into the searchbar and sets the state of the searchField to what was typed into the searchbar
  function handleInputChange(e) {
    const { value } = e.target
    setSearchField(value)
  }

  // Upon the user clicking the 'Search' button use the prevent default to avoid the page refreshing. Then we 
  async function handleFormSubmit(e) {
    e.preventDefault()

    const { value } = e.target
     setSearchField(value)
    // ========================
     weatherSearch()
  }


  async function weatherSearch() {
    console.log('searchField: ',searchField)
  // Takes the value that was put into the searchfiled and returns that many lat and lon points
    const count = await fetch(`https://randomapi.com/api/?key=${RANDOM_NUMBER_KEY}&ref=${RANDOM_REF_KEY}&results=${searchField}&page=10`)
    // Converts the response to a json
    const toJson = await count.json()
    console.log('toJson: ',toJson)
    // grab the results key from the json object
    const latAndLon = await toJson.results
    console.log('latAndLon: ',latAndLon)
    // then it will set the state of the MarkerCount to generate that many weather markers on the map. MakerCount is passed as props to the MapMarkerImage component and for every lat and lon point it will generate an image
    setMarkerCount(latAndLon)
  }
  
  function onMarkerSelect(marker) {
    // when user selects an image generated from the MapMarkerImage component an API call will be made to the Open weather API to get the weather data from those specific lat and long locations. 
    API.searchWeather(marker.lat, marker.lon)
      .then(res => {
        // Then we will pass the weather data for that specific image that was clicked to the selectedMarker state.
        setSelectedMarker(res.data)
      })
  }
  // ====================================================
  return (
    <div>
      {/* Renders the Navbar component and passes the handleInputChange, handleFormSubmit functions and the searchField state value to the component */}
      <NavbarComponent
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        searchField={searchField}
      />
      {/* Renders the ReactMapGL from react-map-gl */}
      <ReactMapGL
        {...viewport}
        mapStyle={"mapbox://styles/suarez9093/ck773vm2e08i91iqi1m48zfss"}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        onViewportChange={setViewPort}
      >
        {/* Renders cloud images to the map */}
        <MapMarkerImage
          onMarkerSelect={onMarkerSelect}
          markerCount={markerCount}
        />
      </ReactMapGL>

      {/* Renders the weather data detail of the selected weather Marker */}
      <Card selectedMarker={selectedMarker} />
    </div>
  )
};

export default Home;
