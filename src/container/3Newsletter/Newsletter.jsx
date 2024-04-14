import React from 'react';
import { useTranslation } from 'react-i18next';

import './Newsletter.css';

function Newsletter() {
  const { t, i18n } = useTranslation();
  console.log(t, 't');
  console.log(i18n.language, 'THIS');
  if (i18n.language === 'jp') {
    console.log('jp');
  } else {
    console.log('EN');
  }
  return (
    <div className='newsletter__bg'>
      {i18n.language === 'jp' ? (
        <iframe
          className='newsletter_height'
          src='https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq8ExA%252BokvlMGf5pwVnAjsSIUE7VbfaZsOztO5iNRn8gS8X4lBTFzgEtozrTjFZYUg4%253D'
          title='Benchmark Email Subscribe Form'
          width='500px'
          height='500px' // Adjust the height as needed
          frameBorder='0'
        ></iframe>
      ) : (
        <iframe
          className='newsletter_height'
          src='https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq8vGA%252FOf5cjs%252F5pwVnAjsSISdLS9sTDAo7tO5iNRn8gS049TyW7spdJ'
          title='Benchmark Email Subscribe Form'
          width='500px'
          height='500px' // Adjust the height as needed
          frameBorder='0'
        ></iframe>
      )}
    </div>
  );
}

export default Newsletter;
