import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Films from "./pages/Films";
import Navbar from "./components/Navbar";

import EndpointsProvider from './context/EndpointsContext';
import People from './pages/People';
import Locations from './pages/Locations';
import Species from './pages/Species';
import Vehicles from './pages/Vehicles';
import FilmsById from './pages/FilmsById';
import PeopleById from './pages/PeopleById';
import LocationsById from './pages/LocationsById';
import SpeciesById from './pages/SpeciesById';
import VehiclesById from './pages/VehiclesById';
import { useEffect, useState } from 'react';
import SplashScreen from './components/splash/SplashScreen';

function App() {
  
  const [ value, setValue ] = useState(true);

  useEffect(() => {
    splash();
  },[])

  function splash() {
    setTimeout(() => {
      setValue(false);
    }, 3000);    
  }
          
  return (
    <EndpointsProvider>
      <Router>
            {value ? null : <Navbar  title="Studio Ghibli"/> }
            <Switch>
                { value 
                  ? <SplashScreen /> 
                  : <Route exact path="/" component={Home}/>                                    
                }  
                  <Route path="/films" component={Films}/>              
                  <Route path="/film/:id" component={FilmsById}/>              
                  <Route path="/people" component={People}/>              
                  <Route path="/character/:id" component={PeopleById}/>              
                  <Route path="/locations" component={Locations}/>              
                  <Route path="/location/:id" component={LocationsById}/>              
                  <Route path="/species" component={Species}/>              
                  <Route path="/specie/:id" component={SpeciesById}/>              
                  <Route path="/vehicles" component={Vehicles}/>              
                  <Route path="/vehicle/:id" component={VehiclesById}/>              
                  <Route component={NotFound}/>
            </Switch>          
      </Router>
    </EndpointsProvider>
  );
}

export default App;
