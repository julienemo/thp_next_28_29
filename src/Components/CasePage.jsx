import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';


import ShortID from '../Constants/ShortID';

const CasePage = ({ intl }) => {
  const { caseSlug } = useParams();
  const [currentCase, setCurrentCase] = useState(null);
  const [currentDisplay, setCurrentDisplay] = useState(null);

  const showParagraphes = (currentSection, nbOfParagraphs) => {
    const list = [];
    for (let i = 1; i <= nbOfParagraphs; i++) {
      list.push(
        <p key={ShortID.generate()}>
          <FormattedMessage
            id={`${currentCase}.section.${currentSection}.paragraph.${i}`}
          />
        </p>,
      );
    }
    return list;
  };

  const display = () => {
    const list = [];
    const sections = Number(intl.formatMessage({ id: `${currentCase}.sections` }));

    for (let i = 1; i <= sections; i++) {
      list.push(
        <div key={ShortID.generate()}>
          <h1>
            <FormattedMessage id={`${currentCase}.section.${i}.title`} />
          </h1>
          {showParagraphes(
            i,
            Number(
              intl.formatMessage({ id: `${currentCase}.section.${i}.paragraphs` }),
            ),
          )}
        </div>,
      );
    }
    return list;
  };

  useEffect(() => {
    setCurrentCase(caseSlug.split('-')[0]);
  }, [caseSlug]);

  useEffect(() => {
    setCurrentDisplay(display());
  }, [currentCase]);

  return (
    <div className="page">
      {currentCase && currentDisplay}
    </div>
  );
};

export default injectIntl(CasePage);
