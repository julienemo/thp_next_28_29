import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

const Page = ({ intl, pageIndex }) => {
  const page = pageIndex;
  const sections = Number(intl.formatMessage({ id: `${page}.sections` }));
  console.log(page);

  return (
    <h1>
      <FormattedMessage id={page} />
    </h1>
  );
};

export default injectIntl(Page);
