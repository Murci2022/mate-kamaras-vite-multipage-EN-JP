import SubHeading from '../SubHeading/SubHeading';
import { images, data } from '../../constants';

import './Awards.css';

const AwardsCard = ({ award: { imgUrl, title, subtitle } }) => {
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
          {title}
        </p>
        <p className='p__cormorant'>{subtitle}</p>
      </div>
    </div>
  );
};

const Awards = () => {
  return (
    <section className='app__bg app__wrapper section__padding matesword__margin-top'>
      <div className='app__wrapper_info'>
        <SubHeading title='Awards & Recognitions' />
        <h1 className='h1__cormorant'>Thank You</h1>
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
