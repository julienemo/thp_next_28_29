import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import ShortID from '../Constants/ShortID';

const HomePage = ({ intl }) => {
  const sections = Number(intl.formatMessage({ id: 'home.sections' }));

  const display = () => {
    const showParagraphs = (currentSection, nbOfParagraphs) => {
      const list = [];
      for (let i = 1; i <= nbOfParagraphs; i++) {
        list.push(
          <p key={ShortID.generate()}>
            <FormattedMessage
              id={`home.section.${currentSection}.paragraph.${i}`}
            />
          </p>,
        );
      }
      return list;
    };
    const list = [];
    for (let i = 1; i <= sections; i++) {
      list.push(
        <div key={ShortID.generate()}>
          <h1>
            <FormattedMessage id={`home.section.${i}.title`} />
          </h1>
          {showParagraphs(
            i,
            Number(
              intl.formatMessage({ id: `home.section.${i}.paragraphs` }),
            ),
          )}
        </div>,
      );
    }
    return list;
  };

  return (
    <div id="page">
      {display()}
    </div>
  );
};

export default injectIntl(HomePage);
