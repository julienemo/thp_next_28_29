import React from 'react';

import { withLanguage } from '../Constants/LanguageContext';

const LangBtn = ({ setting, langContext }) => (
  <div onClick={() => langContext.changeLanguage(setting.lang)} className="change_language">
    <img
      className="lang_flag"
      src={require(`images/${setting.lang}.png`)}
      alt={setting.button}
    />
    <p className="lang_indication">{setting.button}</p>
  </div>
);

export default withLanguage(LangBtn);
