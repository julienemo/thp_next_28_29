import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import Navbar from './Components/Navbar';
import Page from './Components/Page';
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

  const SaveLanguagePreference = () => {
    window.localStorage.setItem('JulieWebistic.lang', language);
  };

  useEffect(() => { SaveLanguagePreference(); }, [language]);

  return (
    <LanguageContext.Provider value={LangContextVars}>
      <IntlProvider locale={language} messages={Messages[language]}>
        <Router>
          <Navbar />
          <Switch>
            {Pages.map((page) => {
              const pagePart = page.name === 'home' ? '/' : `/${page.name}`;
              return (
                <Route key={ShortID.generate()} exact path={pagePart}>
                  <Page pageIndex={page.name} />
                </Route>
              );
            })}
            <Route path="/works/:caseSlug"><CasePage /></Route>
          </Switch>
        </Router>
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export default App;
