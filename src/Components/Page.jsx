import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import CaseCard from './CaseCard';

import ShortID from '../Constants/ShortID';
import Cases from '../Constants/Cases';

const Page = ({ intl, pageIndex }) => {
  const page = pageIndex;
  const sections = Number(intl.formatMessage({ id: `${page}.sections` }));

  const showParagraphes = (currentSection, nbOfParagraphs) => {
    const list = [];
    for (let i = 1; i <= nbOfParagraphs; i++) {
      list.push(
        <p key={ShortID.generate()}>
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
      list.push(
        <div key={ShortID.generate()}>
          <h1>
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

  const ShowCaseCards = () => (
    <>
      {Cases.map((singlCase) => (
        <div key={ShortID.generate()}>
          <CaseCard caseName={singlCase.name} />
        </div>
      ))}
    </>
  );

  return (
    <div className="page">
      {display()}
      {page === 'works' && ShowCaseCards()}
    </div>
  );
};

export default injectIntl(Page);
