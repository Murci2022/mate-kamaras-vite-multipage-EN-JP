import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector'; // Importing the LanguageSelector component
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeState, setActiveState] = useState('this is default');

  const url = new URL(window.location.href);
  const path = url.pathname; // Gets the pathname, e.g., "/about"
  const lastPart = path.substring(path.lastIndexOf('/')); // Extracts the last part after the last "/"
  console.log(lastPart, 'lastPart'); // Outputs "about"

  const handleLanguageChange = (lang) => {
    console.log(lang, 'lang');
    i18n.changeLanguage(lang);
  };

  const handleLinkClick = () => {};

  console.log(activeState, 'activeState');

  return (
    <nav className='navbar'>
      <div className='footer__icons-wrapper'>
        <div className='footer__icons'>
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
        <li className='p__opensans '>
          <a
            href='/'
            className={
              lastPart === '/' || lastPart === '/home' ? 'nav-links-active' : ''
            }
          >
            {t('nav.home')}
          </a>
        </li>
        <li className='p__opensans'>
          <a
            href='/about'
            onClick={() => handleLinkClick('/about')}
            className={lastPart === '/about' ? 'nav-links-active' : ''}
          >
            {t('nav.about')}
          </a>
        </li>
        <li className='p__opensans'>
          <a
            href='/newsletter'
            className={lastPart === '/newsletter' ? 'nav-links-active' : ''}
          >
            {t('nav.newsletter')}
          </a>
        </li>
        <li className='p__opensans'>
          <a
            href='https://www.thalia.de/shop/home/artikeldetails/A1060427891?ProvID=11000533&gad_source=1&gclid=CjwKCAjwoPOwBhAeEiwAJuXRh3bdxXq_HLusx1XHNKRq8UGIVJOuT9n5WAQxkKwodiqYgy4s4dsJmRoCvd0QAvD_BwE'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('nav.shop')}
          </a>
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
