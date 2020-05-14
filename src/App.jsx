import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import MainPage from './Components/MainPage';
import CasePage from './Components/CasePage';

import Messages from './Constants/Messages';
import Pages from './Constants/Pages';
import ShortID from './Constants/ShortID';
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
            {Pages.map((page) => {
              if (page !== 'home') {
                return (
                  <Route key={ShortID.generate()} exact path={`/${page.name}`}>
                    <MainPage pageIndex={page.name} />
                  </Route>
                );
              }
              return '';
            })}
            <Route path="/works/:caseSlug">
              <CasePage />
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
