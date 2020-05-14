import React from 'react';
import { Link } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';

import { withLanguage } from '../Constants/LanguageContext';
import Languages from '../Constants/Languages';
import Pages from '../Constants/Pages';
import ShortID from '../Constants/ShortID';

import LangBtn from './LangBtn';


const Navbar = ({ langContext }) => (
  <nav>
    <div id="btn_zone">
      {Languages.map((lang) => {
        if (lang.lang !== langContext.language) {
          return <LangBtn key={ShortID.generate()} setting={lang} />;
        }
        return '';
      })}
    </div>
    <p className="page_title">Webistic</p>
    <hr />
    <div id="link_zone">
      <p key={ShortID.generate()}>
        |
        {' '}
        <Link className="nav_link" to="/">
          <FormattedMessage id="home" />
        </Link>
        {' '}
        |
      </p>
      {Pages.map((page) => {
        if (page.name !== 'home') {
          return (
            <p key={ShortID.generate()}>
              |
              {' '}
              <Link className="nav_link" to={`/${page.name}`}>
                <FormattedMessage id={page.name} />
              </Link>
              {' '}
              |
            </p>
          );
        }
        return '';
      })}
    </div>
    <hr />
  </nav>
);

export default injectIntl(withLanguage(Navbar));
