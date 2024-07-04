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
        /* <iframe
          className='newsletter_benchmark '
          src='https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq8ExA%252BokvlMGf5pwVnAjsSIUE7VbfaZsOztO5iNRn8gS049TyW7spdJ'
          title='Benchmark Email Subscribe Form'
          // Adjust the height as needed
          width='500px'
          height='500px'
          frameBorder='0'
          style={{
            background: 'none',
            width: '100%',
            maxWidth: '500px',
          }}
        ></iframe> */
        <h1 className='h1__cormorant'>
          <button className='newsletter__button'>
            <a href='https://l.instagram.com/?u=https%3A%2F%2Fforms.gle%2Fk5LMPM9np4ZCfekg6&e=AT3IlMHrHk8blDQuPgzdoV33SEWp89U9JHagADVMZWj5DrxItYM9pUSea25QqpUot3NgaZXi8cjDbv5c4H7oGEY733VCMQknHMcdmXVqZzl8-jlS'>
              -- CLICK HERE --
            </a>
          </button>
        </h1>
      ) : (
        <iframe
          className='newsletter_benchmark'
          src='https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq8vGA%252FOf5cjs%252F5pwVnAjsSISdLS9sTDAo7tO5iNRn8gS049TyW7spdJ'
          title='Benchmark Email Subscribe Form'
          width='500px'
          height='500px'
          style={{ background: 'none', width: '100%', maxWidth: '500px' }}
          frameBorder='0'
        ></iframe>
      )}
      <div className='newsletter-loading'>
        <h1 className='h1__cormorant'>Loading...</h1>
      </div>
    </div>
  );
}

export default Newsletter;
