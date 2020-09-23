import React from 'react';
import '../src/Styles/App.scss'
import NavBar from './components/Menu/Navbar';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
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
  );
}

export default App;
