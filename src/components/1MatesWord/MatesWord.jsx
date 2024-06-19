import { useTranslation } from 'react-i18next';
import { images } from '../../constants';
import { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './MatesWord.css';

const MatesWord = () => {
  const { t } = useTranslation();

  return (
    <section className='app__bg app__wrapper section__padding app__reverse matesword__margin-top'>
      <div className='matesword-img_holder  '>
        <figure className='app__wrapper_img max-width app__wrapper_img-reverse shadow'>
          <img
            src={images.matemask}
            alt="Mate Kamaras's portre with a carnival mask"
          />
        </figure>
      </div>

      <article className='app__wrapper_info'>
        <SubHeading title={t('matesword.subhead')} />

        <h1 className='h1__cormorant'>{t('matesword.title')}</h1>
        <div className='matesword-content'>
          <div className='matesword-content_quote'>
            <img
              src={images.quote}
              alt='quote'
            />
            <p className='p__opensans-grey'>{t('matesword.textA')}</p>
          </div>

          <div className='matesword-card'>
            <div className='matesword_longcontent'>
              <div className='matesword_longcontent-scroll'>
                <p className='p__opensans-grey'>{t('matesword.textB')}</p>
              </div>
            </div>
          </div>

          <div className='matesword-sign'>
            <img
              src={images.sign}
              alt='signiture of Mate'
            />
            <p className='p__opensans-grey'>Mate Kamaras</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default MatesWord;
