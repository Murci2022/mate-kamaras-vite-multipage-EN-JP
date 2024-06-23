import './Works.css';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const Works = ({ title, when }) => {
  const { t } = useTranslation();
  return (
    <div className='works_item_article'>
      <div className='works_item-head'>
        <div className='works_item-name'>
          <p
            className='p__cormorant'
            style={{ color: '#DCCA87' }}
          >
            {t(`about.${title}.production`, { defaultValue: title })}
          </p>
        </div>
        <div className='works_item-dash' />
        <div className='works_item-price'>
          <p
            className='p__cormorant'
            style={{ color: '#DCCA87' }}
          >
            {when}
          </p>
        </div>
      </div>
      <div className='worksmenu-sub'>
        <p
          className='p__opensans'
          style={{ color: '#AAA' }}
        >
          {t(`about.${title}.where`, { defaultValue: title })}
        </p>
      </div>
    </div>
  );
};

export default Works;

Works.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
