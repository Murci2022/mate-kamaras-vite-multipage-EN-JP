import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector'; // Importing the LanguageSelector component
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('this is default');

  const url = new URL(window.location.href);
  const path = url.pathname; // Gets the pathname, e.g., "/about"
  const lastPart = path.substring(path.lastIndexOf('/')); // Extracts the last part after the last "/"
  console.log(lastPart, 'lastPart');
  console.log(i18n.language, '????');
  const selectedLanguage = i18n.language;
  console.log(selectedLanguage);

  const handleLanguageChange = (lang) => {
    console.log(lang, 'lang');
    i18n.changeLanguage(lang);
  };

  const handleLinkClick = () => {};

  return (
    <nav className='navbar'>
      <div className='nav__icons-wrapper'>
        <div className='nav__icons'>
          <a href='#'>
            <FaFacebook />
          </a>
          <a href='#'>
            <FaTiktok />
          </a>
          <a href='#'>
            <FaInstagram />
          </a>
        </div>
      </div>

      <ul className='navbar-links'>
        <li className='p__cormorant-gold '>
          <a
            href='/'
            className={
              lastPart === '/' || lastPart === '/home' ? 'nav-links-active' : ''
            }
          >
            {t('nav.home')}
          </a>
        </li>
        <li className='p__cormorant-gold'>
          <a
            href='/about'
            onClick={() => handleLinkClick('/about')}
            className={lastPart === '/about' ? 'nav-links-active' : ''}
          >
            {t('nav.about')}
          </a>
        </li>
        <li className='p__cormorant-gold'>
          <a
            href='/newsletter'
            className={lastPart === '/newsletter' ? 'nav-links-active' : ''}
          >
            {t('nav.newsletter')}
          </a>
        </li>
        <li className='p__cormorant-gold'>
          <a href='https://www.thalia.de/shop/home/artikeldetails/A1060427891?ProvID=11000533&gad_source=1&gclid=CjwKCAjwoPOwBhAeEiwAJuXRh3bdxXq_HLusx1XHNKRq8UGIVJOuT9n5WAQxkKwodiqYgy4s4dsJmRoCvd0QAvD_BwE'>
            {t('nav.shop')}
          </a>
        </li>
        <li className='p__cormorant-gold'>
          <a href='https://www.matekamaras.com/'>{t('nav.paintings')}</a>
        </li>
      </ul>

      {/* Integrate the LanguageSelector component */}
      <div className='navbar-language-selector'>
        <LanguageSelector
          onChange={handleLanguageChange}
          selectedLanguage={selectedLanguage}
        />
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
              className='nav__overlay-close'
            />
            <ul className='navbar-smallscreen-links'>
              <li className='p__cormorant-gold '>
                <a
                  href='/'
                  className={
                    lastPart === '/' || lastPart === '/home'
                      ? 'nav-links-active'
                      : ''
                  }
                >
                  {t('nav.home')}
                </a>
              </li>
              <li className='p__cormorant-gold'>
                <a
                  href='/about'
                  onClick={() => handleLinkClick('/about')}
                  className={lastPart === '/about' ? 'nav-links-active' : ''}
                >
                  {t('nav.about')}
                </a>
              </li>
              <li className='p__cormorant-gold'>
                <a
                  href='/newsletter'
                  className={
                    lastPart === '/newsletter' ? 'nav-links-active' : ''
                  }
                >
                  {t('nav.newsletter')}
                </a>
              </li>
              <li className='p__cormorant-gold'>
                <a href='https://www.thalia.de/shop/home/artikeldetails/A1060427891?ProvID=11000533&gad_source=1&gclid=CjwKCAjwoPOwBhAeEiwAJuXRh3bdxXq_HLusx1XHNKRq8UGIVJOuT9n5WAQxkKwodiqYgy4s4dsJmRoCvd0QAvD_BwE'>
                  {t('nav.shop')}
                </a>
              </li>
              <li className='p__cormorant-gold'>
                <a href='https://www.matekamaras.com/'>{t('nav.paintings')}</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
