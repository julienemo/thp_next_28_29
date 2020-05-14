import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const CaseCard = ({ ...caseName }) => {
  const currentCase = caseName.caseName;
  const createSlug = (name) => (`${name}-case-study`);

  return (
    <div className="case_card">
      <h3 className="case_card_el">
        <FormattedMessage id={`${currentCase}.section.1.title`} />
      </h3>
      <p className="case_card_el">
        |
        {' '}
        <Link exact="true" to={`/works/${createSlug(currentCase)}`}>
          <FormattedMessage id="to_case" />
        </Link>
        {' '}
        |
      </p>
    </div>
  );
};

export default CaseCard;
