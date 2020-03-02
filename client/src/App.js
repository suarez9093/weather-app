import React, {Fragment} from 'react';
import { Switch, Route } from 'react-router-dom';
// import NavbarComponent from './components/NavbarComponent'
import Home from './pages/Home';
import SavedWeatherPoints from './pages/SavedWeatherPoints';
// import { Navbar } from 'reactstrap';

 
function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path ='/'><Home /></Route>
        <Route exact path ='/saved'><SavedWeatherPoints /></Route>
      </Switch>
    </Fragment>
  )
};

export default App;