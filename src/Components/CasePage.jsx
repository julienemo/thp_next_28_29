import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';


import ShortID from '../Constants/ShortID';

const CasePage = ({ intl }) => {
  const { caseSlug } = useParams();
  const [currentCase] = useState(caseSlug.split('-')[0]);

  const display = () => {
    const showParagraphs = (currentSection, nbOfParagraphs) => {
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

    const list = [];
    const sections = Number(
      intl.formatMessage({ id: `${currentCase}.sections` }),
    );

    for (let i = 1; i <= sections; i++) {
      list.push(
        <div className="page" key={ShortID.generate()}>
          <h1 className="case_title">
            <FormattedMessage id={`${currentCase}.section.${i}.title`} />
          </h1>
          {showParagraphs(
            i,
            Number(
              intl.formatMessage({
                id: `${currentCase}.section.${i}.paragraphs`,
              }),
            ),
          )}
        </div>,
      );
    }
    return list;
  };

  return (
    <>
      {display()}
    </>
  );
};

export default injectIntl(CasePage);
