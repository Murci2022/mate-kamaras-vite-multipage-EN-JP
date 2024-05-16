import { useTranslation } from 'react-i18next';
import SubHeading from '../../components/SubHeading/SubHeading';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import { images } from '../../constants';

import './Footer.css';

const Newsletter = () => {
  return (
    <div className='newsletter-container component__bg'>
      <div className='newsletter-container_info'>
        <SubHeading title='Newsletter' />
        <h1 className='h1__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans text__center'>
          and never miss the latest update
        </p>
      </div>
      <div className='newsletter-container_signup flex-center'>
        <input
          type='email'
          placeholder='Please enter your email'
          name='email'
          id='email'
        />
        <button
          type='submit'
          className='custom__button'
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  const { t, i18n } = useTranslation();
  console.log(t);
  return (
    <div className='app__bg '>
      <div className='footer__newsletter'>
        {/* <Newsletter /> */}
        <div
          id='contact'
          className='footer__links-container '
        >
          {/*  <div className='footer__links'>
            <div className='footer__contact'>
              <p className='p__cormorant-gold'>
                <a href='#'>Contact Us</a>
              </p>
            </div>
            <div className='footer__icons-wrapper'>
              <div className='footer__icons'>
                <a href='https://www.facebook.com'>
                  <FaFacebook />
                </a>
                <a href='https://www.tiktok.com'>
                  <FaTiktok />
                </a>
                <a href='https://www.instagram.com'>
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className='footer__paintings'>
              <p className='p__cormorant-gold'>
                <a href='https://www.matekamaras.com/'>Mate's paintings</a>
              </p>
            </div>
          </div> */}
          <div className='footer__icon-container'>
            {/*    <a href='https://www.instagram.com'>
              <img
                className='footer__icon-flag'
                src={images.en}
                alt='english flag'
              />
            </a> */}
            <a href={`mailto:${t('footer.contact')}`}>
              <p>{t('footer.contact')}</p>
            </a>

            {/* <a href='mailto:management@matekamaras.com'>
              <img
                className='footer__icon-flag'
                src={images.jp}
                alt='english flag'
              />
            </a> */}
          </div>
          <div className='footer__copyright'>
            <p className='p__opensans'>@2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
