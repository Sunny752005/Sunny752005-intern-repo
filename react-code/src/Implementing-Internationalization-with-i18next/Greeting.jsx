import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n'; 

function Greeting() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
}

export default Greeting;
