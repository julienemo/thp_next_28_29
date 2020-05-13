import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Languages from '../Constants/Languages';
import ShortID from '../Constants/ShortID';

import LangBtn from './LangBtn';

import { withLanguage } from '../Constants/LanguageContext';


const Navbar = ({ langContext }) => {
  console.log('in nav');
  return (
    <nav>
      <div id="btn_zone">
        {Languages.map((lang) => {
          if (lang.lang !== langContext.language) {
            return <LangBtn key={ShortID.generate()} setting={lang} />;
          }
        })}
      </div>
      <h1>Webistic</h1>
      <hr />

      <div id="link_zone">
        <p>

          <Link className="internal" to="/">
            <FormattedMessage id="home" />
          </Link>
        </p>
        <p>

          <Link className="internal" to="/about">
            <FormattedMessage id="about" />
          </Link>
        </p>

        <p>

          <Link className="internal" to="/works">
            <FormattedMessage id="works" />
          </Link>
        </p>
      </div>
      <hr />
    </nav>
  );
};

export default withLanguage(Navbar);
