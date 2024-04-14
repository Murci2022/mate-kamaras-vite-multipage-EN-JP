import { useTranslation } from 'react-i18next';

import { images } from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Hero.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  console.log(t, 't');
  console.log(i18n, 'i18n');
  return (
    <section
      className='hero__bg app__wrapper margin-top section__padding'
      id='home'
    >
      <article className='app__wrapper_info'>
        <a
          href='#about'
          style={{ color: 'white' }}
        >
          <SubHeading title={t('hero.subhead')} />
        </a>

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
        >
          {t('hero.news')}
        </button>
      </article>
      <figure className='app__wrapper_img'>
        <img
          src={images.mate_hero}
          alt='hero img'
        />
      </figure>
    </section>
  );
};

export default Header;
