import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import ShortID from './ShortID';

const Display = ({ pageIndex, intl }) => {
  const sections = Number(
    intl.formatMessage({ id: `${pageIndex}.sections` }),
  );

  const showParagraphs = (currentSection, nbOfParagraphs) => {
    const parList = [];
    for (let i = 1; i <= nbOfParagraphs; i += 1) {
      parList.push(
        <p key={ShortID.generate()}>
          <FormattedMessage
            id={`${pageIndex}.section.${currentSection}.paragraph.${i}`}
          />
        </p>,
      );
    }
    return parList;
  };

  const sectionList = [];
  for (let i = 1; i <= sections; i += 1) {
    sectionList.push(
      <div key={ShortID.generate()}>
        <h1>
          <FormattedMessage id={`${pageIndex}.section.${i}.title`} />
        </h1>
        {showParagraphs(
          i,
          Number(
            intl.formatMessage({ id: `${pageIndex}.section.${i}.paragraphs` }),
          ),
        )}
      </div>,
    );
  }
  return sectionList;
};

export default injectIntl(Display);
