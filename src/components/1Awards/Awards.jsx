import SubHeading from '../SubHeading/SubHeading';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { images, data } from '../../constants';
import './Awards.css';

const AwardsCard = ({ award: { imgUrl, title } }) => {
  const { t } = useTranslation();

  return (
    <div className='awards-card'>
      <img
        src={imgUrl}
        alt='award logo with number'
      />
      <div className='awards-card_content'>
        <p
          className='p__cormorant'
          style={{ color: '#DCCA87' }}
        >
          {t(`awards.${title}.title`, { defaultValue: title })}
        </p>
        <p className='p__cormorant'>
          {' '}
          {t(`awards.${title}.subtitle`, { defaultValue: title })}
        </p>
      </div>
    </div>
  );
};
AwardsCard.propTypes = {
  award: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
};

const Awards = () => {
  const { t } = useTranslation();
  return (
    <section className='app__bg app__wrapper section__padding matesword__margin-top'>
      <div className='app__wrapper_info'>
        <SubHeading title={t('awardsTitle.subhead')} />
        <h1 className='h1__cormorant'>{t('awardsTitle.title')}</h1>
        <div className='awards-info'>
          {data.awards.map((award) => (
            <AwardsCard
              key={award.title}
              award={award}
            />
          ))}
        </div>
      </div>
      <div className='app__wrapper_img hero__img-shadow'>
        <img
          src={images.awards_img}
          alt='img of Mate in a park, with sunglasses'
        />
      </div>
    </section>
  );
};

export default Awards;
