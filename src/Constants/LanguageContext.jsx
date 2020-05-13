import React, { createContext } from 'react';

const LanguageContext = createContext('');

export const withLanguage = (Component) => (props) => (
  <LanguageContext.Consumer>
    {(value) => <Component {...props} langContext={value} />}
  </LanguageContext.Consumer>
);

export default LanguageContext;
