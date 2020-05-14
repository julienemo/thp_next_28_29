import React from 'react';
import { injectIntl } from 'react-intl';

import Display from '../Constants/Display';

const Home = ({ intl }) => {
  const pageIndex = 'home';

  return <div id="page">{Display({ pageIndex, intl })}</div>;
};

export default injectIntl(Home);
