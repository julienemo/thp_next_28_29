import React from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
  console.log('in About');

  return (
    <h1><FormattedMessage id="about" /></h1>
  );
};

export default About;
