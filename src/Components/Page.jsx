import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import ShortID from '../Constants/ShortID';

const Page = ({ intl, pageIndex }) => {
  const page = pageIndex;
  console.log(`in page${page}`);
  const sections = Number(intl.formatMessage({ id: `${page}.sections` }));
  console.log(sections);

  const showParagraphes = (currentSection, nbOfParagraphs) => {
    const list = [];
    for (let i = 1; i <= nbOfParagraphs; i++) {
      console.log(`${page} section ${currentSection} par ${i}`);
      list.push(
        <p key={ShortID.generate()} id={`${page} ${currentSection} ${i}`}>
          <FormattedMessage
            id={`${page}.section.${currentSection}.paragraph.${i}`}
          />
        </p>,
      );
    }
    return list;
  };

  const display = () => {
    const list = [];
    for (let i = 1; i <= sections; i++) {
      console.log(`${page} section ${i}`);
      list.push(
        <div key={ShortID.generate()}>
          <h1 id={`${page} ${i}`}>
            <FormattedMessage id={`${page}.section.${i}.title`} />
          </h1>
          {showParagraphes(
            i,
            Number(
              intl.formatMessage({ id: `${page}.section.${i}.paragraphs` }),
            ),
          )}
        </div>,
      );
    }
    return list;
  };


  return <div className={page}>{display()}</div>;
};

export default injectIntl(Page);
