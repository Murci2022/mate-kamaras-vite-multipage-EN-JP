import { useTranslation } from 'react-i18next';
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';

import LanguageSelector from './LanguageSelector'; // Importing the LanguageSelector component

import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    console.log(lang, 'lang');
    i18n.changeLanguage(lang);
  };

  return (
    <nav className='navbar'>
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

      <ul className='navbar-links'>
        <li className='p__opensans'>
          <a href='/'>{t('nav.home')}</a>
        </li>
        <li className='p__opensans'>
          <a href='/about'>{t('nav.about')}</a>
        </li>
        <li className='p__opensans'>
          <a href='/newsletter'>{t('nav.newsletter')}</a>
        </li>
        <li className='p__opensans'>
          <a
            href='https://www.matekamaras.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('nav.paintings')}
          </a>
        </li>
      </ul>

      {/* Integrate the LanguageSelector component */}
      <div className='navbar-language-selector'>
        <LanguageSelector onChange={handleLanguageChange} />
      </div>

      {/* Hamburger menu for small screens */}
      <div className='navbar-smallscreen'>
        <GiHamburgerMenu
          className='navbar_hamburger-icon'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className='navbar-smallscreen_overlay flex__center slide-bottom'>
            <GiCancel
              fontSize={12}
              onClick={() => setToggleMenu(false)}
              className='overlay__close'
            />
            <ul className='navbar-smallscreen-links'>
              <li className='p__opensans'>
                <a
                  href='/'
                  onClick={() => setToggleMenu(false)}
                >
                  {t('nav.home')}
                </a>
              </li>
              <li className='p__opensans'>
                <a
                  href='/about'
                  onClick={() => setToggleMenu(false)}
                >
                  {t('nav.about')}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
