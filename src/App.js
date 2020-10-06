import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
//import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//import Navbar from './components/Menu/Navbar'
import Slider from './components/slider/Slider';
// import Message from './components/Message/Message';
// import Detail from '../src/components/Detail/Detail';
// import Goals from './components/Goals/Goals';
// import BecomePart from './components/Community/BecomePart'
//import News from './components/Community/News';
// import ContacForm from './components/contacForm/ContacForm';
// import Testimonials from './components/testimonials/Testimonials';
 import NavBarR from './components/Menu/toolbar/NavbarR'


function App() {
  

  return (
    <Fragment>
      <div  style={{height:'100%'}}>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                {/* <Navbar /> */}
                <NavBarR />
               

              </Route>
              <Route path="/test">
                {/* <LinksRRSS /> */}
              </Route>
            </Switch>
          </Router>
        </div>
        <div>
           <Slider />
        </div>
        <div>
          {/* <Message /> */}
        </div>

        <div>
          {/* <Detail /> */}
        </div>
        <div>
           {/* <Goals/>  */}
        </div>
       <div>
       {/* <BecomePart /> */}
       </div>
       <div>
         {/* <News /> */}
       </div>
        <div>
      {/* <Testimonials /> */}
       </div>
        <div>
          {/* <ContacForm/> */}
        </div>



      </div>
    </Fragment>
  );
}

export default App;
