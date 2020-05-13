import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => {
  console.log('in Home');

  return (
    <h1><FormattedMessage id="home" /></h1>
  );
};

export default Home;
