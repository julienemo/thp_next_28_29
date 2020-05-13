import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';

import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works';


const App = () => {
  console.log('in app');

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>

        </Switch>
      </Router>
    </>
  );
};

export default App;
