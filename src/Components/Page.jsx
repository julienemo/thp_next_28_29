import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { injectIntl } from 'react-intl';

import Cases from '../Constants/Cases';
import Display from '../Constants/Display';
import ShortID from '../Constants/ShortID';

import CaseCard from './CaseCard';

const Page = ({ intl }) => {
  const { pageSlug, caseSlug } = useParams();
  const pageIndex = caseSlug ? caseSlug.split('-')[0] : pageSlug.split('/')[0];

  const [currentDisplay, setCurrentDisplay] = useState(null);

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
    setCurrentDisplay(Display({ pageIndex, intl }));
  }, [caseSlug, pageSlug, intl]);


  return (
    <div id="page">
      {currentDisplay && currentDisplay}
      {pageIndex === 'works' && ShowCaseCards()}
    </div>
  );
};

export default injectIntl(Page);
