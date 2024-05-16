import './Works.css';
import PropTypes from 'prop-types';
const Works = ({ production, when, where }) => (
  <div className='works_item_article'>
    <div className='works_item-head'>
      <div className='works_item-name'>
        <p
          className='p__cormorant'
          style={{ color: '#DCCA87' }}
        >
          {production}
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
        {where}
      </p>
    </div>
  </div>
);

export default Works;

Works.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
