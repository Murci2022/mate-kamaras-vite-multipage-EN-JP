import PropTypes from 'prop-types';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>

    <img
      src={images.mic}
      alt='mic'
      className='mic__img'
    />
  </div>
);

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeading;
