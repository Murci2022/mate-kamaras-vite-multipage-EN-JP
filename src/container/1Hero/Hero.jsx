import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import { images } from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';
import MatesWord from '../../components/1MatesWord/MatesWord';
import Awards from '../../components/1Awards/Awards';

import './Hero.css';

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  const { t, i18n } = useTranslation();
  return (
    <>
      <div style={{ height: '100px' }}></div>
      <div className={isShown ? 'app__pop-up-layer' : ''}></div>

      <section
        className=' hero__bg app__wrapper margin-top section__padding'
        id='home'
      >
        {/* POP UP START hero__pop-up border*/}
        <div className={`hero__pop-up ${isShown ? 'hero__pop-up_shown' : ''}`}>
          <div className='hero__pop-up-conti'>
            <div className='hero__pop-up-conti_header'>
              <h1 className='hero-h1_pop-up'>{t('hero.news')}</h1>
              <GiCancel
                fontSize={12}
                className='nav__overlay-close'
                onClick={() => setIsShown(false)}
              />
            </div>
          </div>
          <div className='hero__pop-up-conti_img'>
            <img
              src={images.nextconcert}
              alt='img of poster'
            />
          </div>

          <button
            type='button'
            className='custom__button hero__pop-up_btn'
            onClick={console.log('click')}
          >
            <a href='http://www.tatsumimarie.jp/event-form-20240921/index.php?name=%E8%BE%B0%E5%B7%B3%E7%9C%9F%E7%90%86%E6%81%B5%E3%82%BD%E3%83%97%E3%83%A9%E3%83%8E%E3%83%AA%E3%82%B5%E3%82%A4%E3%82%BF%E3%83%ABVol.6'>
              {t('hero.pop-up-button-msg')}
            </a>
          </button>
        </div>

        {/* POP UP end________________ */}

        <article className='app__wrapper_info'>
          <div style={{ color: 'white' }}>
            <SubHeading title={t('hero.subhead')} />
          </div>

          <h1 className='hero-h1'>{t('hero.name')}</h1>
          <h1 className='hero-h1'>{t('hero.fname')}</h1>
          <p
            className='p__opensans'
            style={{ margin: '2rem 0' }}
          >
            {t('hero.desc')}
          </p>
          <button
            type='button'
            className='custom__button'
            onClick={() => setIsShown(!isShown)}
          >
            {t('hero.news')}
          </button>
        </article>
        <figure className='app__wrapper_img hero__max-width hero__img-shadow'>
          <img
            src={images.mate_hero}
            alt='hero img'
          />
        </figure>
      </section>

      <MatesWord />
      <Awards />
    </>
  );
};

export default Header;
