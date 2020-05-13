import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works';

import Messages from './Constants/Messages';

const App = () => {
  const [language, setLanguage] = useState('ZH');
  console.log('in app');

  return (
    <IntlProvider locale={language} messages={Messages[language]}>
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
    </IntlProvider>
  );
};

export default App;
