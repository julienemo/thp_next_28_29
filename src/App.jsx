import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works';
import Page from './Pages/Page';

import Messages from './Constants/Messages';
import Pages from './Constants/Pages';
import ShortID from './Constants/ShortID';
import LanguageContext from './Constants/LanguageContext';

const App = () => {
  const initialLang = window.localStorage.getItem('JulieWebistic.lang') || 'FR';
  const [language, setLanguage] = useState(initialLang);

  const changeLanguage = (targetLang) => {
    console.log('in change lang from App');
    setLanguage(targetLang);
  };

  const LangContextVars = {
    language,
    changeLanguage,
  };

  const SaveLanguagePreference = () => {
    window.localStorage.setItem('JulieWebistic.lang', language);
  };

  useEffect(() => { SaveLanguagePreference(); }, [language]);

  console.log('in app');

  return (
    <LanguageContext.Provider value={LangContextVars}>
      <IntlProvider locale={language} messages={Messages[language]}>
        <Router>
          <Navbar />
          <Switch>
            <div className="page">
              {
                Pages.map((page) => {
                  const path = page.name === 'home' ? '/' : `/${Messages[language][page.name]}`;
                  return (
                    <Route key={ShortID.generate()} exact path={path}>
                      <Page pageIndex={page.name} />
                    </Route>
                  );
                })
              }
            </div>
          </Switch>
        </Router>
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default App;
