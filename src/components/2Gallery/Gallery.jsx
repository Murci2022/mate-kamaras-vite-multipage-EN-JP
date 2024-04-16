import PropTypes from 'prop-types';
import { images, data } from '../../constants';
import { useRef } from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import SubHeading from '../SubHeading/SubHeading';

import './Gallery.css';

const GalleryImageCard = ({ galleryImage: { imgUrl, title } }) => {
  return (
    <div className='gallery-images_card border flex__center'>
      <img
        src={imgUrl}
        alt={title}
      />
      <BsInstagram className='gallery__images-icon' />
    </div>
  );
};

const Gallery = () => {
  const scrollRef = useRef(null);
  console.log(scrollRef, 'scrollRef');
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const maxScrollLeft = current.scrollWidth - current.clientWidth;
    const scrollAmount = 300;

    if (direction === 'left') {
      current.scrollLeft =
        current.scrollLeft === 0
          ? current.scrollWidth
          : current.scrollLeft - scrollAmount;
    } else {
      current.scrollLeft =
        current.scrollLeft >= maxScrollLeft
          ? 0
          : current.scrollLeft + scrollAmount;
    }
  };

  return (
    <div className='flex-center border gallery__section'>
      <div className='gallery-content'>
        <SubHeading title='Posters' />
        <h1 className='h1__cormorant'>Mate's Gallery</h1>
        <p
          className='p__opensans'
          style={{ color: '#fff', marginTop: '2rem' }}
        >
          Welcome to Mate's personal poster gallery, presenting snapshots from
          diverse stages of their journey as a singer. Each poster provides a
          glimpse into Mate's experiences and cherished moments on stage.
        </p>
      </div>
      <div className='gallery-images'>
        <div
          className='gallery-images_container'
          ref={scrollRef}
        >
          {data.galleryImages.map((galleryImage, index) => {
            return (
              <GalleryImageCard
                key={galleryImage.title + index}
                galleryImage={galleryImage}
              />
            );
          })}
        </div>
        <div className='gallery-images_arrows'>
          <BsArrowLeftShort
            className='gallery__arrow-icons'
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className='gallery__arrow-icons'
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

GalleryImageCard.propTypes = {
  galleryImage: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default Gallery;
