import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
import NavBar from './components/Menu/Navbar';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from './components/slider/Slider';
//import ContacForm from './components/contacForm/ContacForm'
//import SliderPart from './components/sliderPartners/SliderPart';
//import Testimonials from './components/testimonials/Testimonials';





function App() {
  return (
    <Fragment>
      <div>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                <NavBar />
              </Route>
              <Route path="/test">
                <LinksRRSS />
              </Route>
            </Switch>
          </Router>
        </div>
        <div>
        <Slider />
        </div>
        <div>
       
        </div>
      </div>
    </Fragment>
  );
}

export default App;
