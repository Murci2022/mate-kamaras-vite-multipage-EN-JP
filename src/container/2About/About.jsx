import SubHeading from '../../components/SubHeading/SubHeading';
import Works from '../../components/2Works/Works';

import { data } from '../../constants';

import './About.css';

const About = () => (
  <section
    className='shop__section margin-top flex__center section__padding'
    id='shop'
  >
    <div className=' shop-title'>
      <h1 className='h1__cormorant'>Mate&apos;s Stages</h1>
      <SubHeading title='' />
    </div>
    <article className='shop-menu '>
      <div className=' shop-menu_mates '>
        <div className='shop-menu_items'>
          {data.works.map((work, index) => {
            console.log(work);
            return (
              <Works
                key={work.production + index}
                title={work.production}
                price={work.when}
                tags={work.where}
              />
            );
          })}
        </div>
      </div>
    </article>

    {/* <div style={{ marginTop: '15px' }}></div> */}
  </section>
);

export default About;
