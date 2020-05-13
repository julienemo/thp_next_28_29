import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => {
  console.log('in Home');

  return (
    <>
      <h1>
        <FormattedMessage id="home.title" />
      </h1>
      <p>
        <FormattedMessage id="home.paragraph.1" />
      </p>
    </>
  );
};

export default Home;
