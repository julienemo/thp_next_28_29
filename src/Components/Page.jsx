import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';

import CaseCard from './CaseCard';

import Cases from '../Constants/Cases';
import ShortID from '../Constants/ShortID';

const Page = ({ intl }) => {
  const { pageSlug, caseSlug } = useParams();
  const pageIndex = () => {
    if (caseSlug) {
      return caseSlug.split('-')[0];
    }
    return pageSlug.split('/')[0];
  };

  const [currentDisplay, setCurrentDisplay] = useState(null);
  const history = useHistory();

  const ShowCaseCards = () => (
    <>
      {Cases.map((singleCase) => (
        <div key={ShortID.generate()}>
          <CaseCard caseName={singleCase.name} />
        </div>
      ))}
    </>
  );

  useEffect(() => {
    console.log('history slug changes');
    console.log(window.location);
    const display = () => {
      const showParagraphs = (currentSection, nbOfParagraphs) => {
        const list = [];
        for (let i = 1; i <= nbOfParagraphs; i++) {
          list.push(
            <p key={ShortID.generate()}>
              <FormattedMessage
                id={`${pageIndex()}.section.${currentSection}.paragraph.${i}`}
              />
            </p>,
          );
        }
        return list;
      };

      const list = [];
      const sections = Number(
        intl.formatMessage({ id: `${pageIndex()}.sections` }),
      );

      for (let i = 1; i <= sections; i++) {
        list.push(
          <div key={ShortID.generate()}>
            <h1 className="case_title">
              <FormattedMessage id={`${pageIndex()}.section.${i}.title`} />
            </h1>
            {showParagraphs(
              i,
              Number(
                intl.formatMessage({
                  id: `${pageIndex()}.section.${i}.paragraphs`,
                }),
              ),
            )}
          </div>,
        );
      }
      return list;
    };
    setCurrentDisplay(display());
  }, [caseSlug, pageSlug, history]);


  return (
    <div id="page">
      {currentDisplay && currentDisplay}
      {pageIndex() === 'works' && ShowCaseCards()}
    </div>
  );
};

export default injectIntl(Page);
