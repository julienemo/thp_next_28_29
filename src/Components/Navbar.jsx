import React from 'react';
import { Link } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';

import Languages from '../Constants/Languages';
import Pages from '../Constants/Pages';
import ShortID from '../Constants/ShortID';

import LangBtn from './LangBtn';

import { withLanguage } from '../Constants/LanguageContext';


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
      {Pages.map((page) => {
        const pagePart = page.name === 'home' ? '/' : `/${page.name}`;
        return (
          <p key={ShortID.generate()}>
            |
            {' '}
            <Link className="nav_link" to={pagePart}>
              <FormattedMessage id={page.name} />
            </Link>
            {' '}
            |
          </p>
        );
      })}
    </div>
    <hr />
  </nav>
);

export default injectIntl(withLanguage(Navbar));
