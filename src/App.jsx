import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider, useIntl } from 'react-intl';

import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Page from './Components/Page';

import Messages from './Constants/Messages';
import LanguageContext from './Constants/LanguageContext';

const App = () => {
  const initialLang = window.localStorage.getItem('JulieWebistic.lang') || 'FR';
  const [language, setLanguage] = useState(initialLang);

  const changeLanguage = (targetLang) => {
    setLanguage(targetLang);
  };

  const LangContextVars = {
    language,
    changeLanguage,
  };

  useEffect(() => {
    window.localStorage.setItem(
      'JulieWebistic.lang',
      language,
    );
  }, [language]);

  return (
    <LanguageContext.Provider value={LangContextVars}>
      <IntlProvider locale={language} messages={Messages[language]}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/:pageSlug/:caseSlug?">
              <Page />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default App;
