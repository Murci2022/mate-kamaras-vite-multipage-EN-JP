import { useState } from 'react';
import { images } from '../../constants';
import { useTranslation } from 'react-i18next';
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector'; // Importing the LanguageSelector component
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <nav className='navbar'>
      <div className='nav__icons-wrapper'>
        <div className='nav__icons'>
          <a href='https://www.facebook.com/matekamarasofficial/'>
            <FaFacebook />
          </a>
          <a href='https://www.youtube.com/watch?v=0Us6LXhvnyM'>
            <FaYoutube />
          </a>
          <a href='https://www.instagram.com/matekamaras/'>
            <FaInstagram />
          </a>
        </div>
      </div>

      <ul className='navbar-links'>
        <li className='p__cormorant-gold'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'nav-links-active' : '')}
            onClick={handleLinkClick}
          >
            {t('nav.home')}
          </NavLink>
        </li>
        <li className='p__cormorant-gold horizontal-align'>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'nav-links-active' : '')}
            onClick={handleLinkClick}
          >
            {t('nav.about')}
          </NavLink>
        </li>
        <li className='p__cormorant-gold horizontal-align'>
          <NavLink
            to={
              i18n.language === 'jp'
                ? 'https://l.instagram.com/?u=https%3A%2F%2Fforms.gle%2Fk5LMPM9np4ZCfekg6&e=AT3IlMHrHk8blDQuPgzdoV33SEWp89U9JHagADVMZWj5DrxItYM9pUSea25QqpUot3NgaZXi8cjDbv5c4H7oGEY733VCMQknHMcdmXVqZzl8-jlS'
                : '/newsletter'
            }
            className={({ isActive }) => (isActive ? 'nav-links-active' : '')}
            onClick={handleLinkClick}
            target={i18n.language === 'jp' ? '_blank' : '_self'} // Open in new tab if Japanese
          >
            {t('nav.newsletter')}
          </NavLink>
          <img
            style={{ width: '16px', height: '16px', marginLeft: '5px' }}
            src={
              i18n.language === 'en'
                ? images.en
                : i18n.language === 'jp'
                ? images.jp
                : i18n.language === 'zh'
                ? images.zh
                : i18n.language === 'ko'
                ? images.ko
                : i18n.language === 'hu'
                ? images.hu
                : images.en // optional default case
            }
            alt='language flag'
          />
        </li>
        <li className='p__cormorant-gold'>
          <a href='https://www.thalia.de/shop/home/artikeldetails/A1060427891?ProvID=11000533&gad_source=1&gclid=CjwKCAjwoPOwBhAeEiwAJuXRh3bdxXq_HLusx1XHNKRq8UGIVJOuT9n5WAQxkKwodiqYgy4s4dsJmRoCvd0QAvD_BwE'>
            {t('nav.shop')}
          </a>
        </li>
        <li className='p__cormorant-gold'>
          <a href='https://painting-vite-mate-kamaras.vercel.app/'>{t('nav.paintings')}</a>
        </li>
      </ul>

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
              <li className='p__cormorant-gold'>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    isActive ? 'nav-links-active' : ''
                  }
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {t('nav.home')}
                </NavLink>
              </li>
              <li className='p__cormorant-gold'>
                <NavLink
                  to='/about'
                  className={({ isActive }) =>
                    isActive ? 'nav-links-active' : ''
                  }
                  onClick={handleLinkClick}
                >
                  {t('nav.about')}
                </NavLink>
              </li>
              <li className='p__cormorant-gold'>
                <NavLink
                  to='/newsletter'
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-links-active horizontal-align'
                      : 'horizontal-align'
                  }
                  onClick={handleLinkClick}
                >
                  {t('nav.newsletter')}
                  <img
                    style={{ width: '12px', height: '12px' }}
                    src={i18n.language === 'en' ? images.en : images.jp}
                    alt='language flag'
                  />
                </NavLink>
              </li>
              <li className='p__cormorant-gold'>
                <a
                  href='https://www.thalia.de/shop/home/artikeldetails/A1060427891?ProvID=11000533&gad_source=1&gclid=CjwKCAjwoPOwBhAeEiwAJuXRh3bdxXq_HLusx1XHNKRq8UGIVJOuT9n5WAQxkKwodiqYgy4s4dsJmRoCvd0QAvD_BwE'
                  onClick={handleLinkClick}
                >
                  {t('nav.shop')}
                </a>
              </li>
              <li className='p__cormorant-gold'>
                <a
                  href='https://painting-vite-mate-kamaras.vercel.app/'
                  onClick={handleLinkClick}
                >
                  {t('nav.paintings')}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Integrate the LanguageSelector component */}
      <div className='navbar-language-selector'>
        <LanguageSelector
          onChange={handleLanguageChange}
          selectedLanguage={i18n.language}
        />
      </div>
    </nav>
  );
};

export default Navbar;
