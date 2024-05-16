import SubHeading from '../../components/SubHeading/SubHeading';
import Works from '../../components/2Works/Works';

import { data } from '../../constants';

import './About.css';

const About = () => (
  <section
    className='about__section margin-top flex__center section__padding'
    id='about'
  >
    <div className=' about-title'>
      <h1 className='h1__cormorant'>Mate&apos;s Stages</h1>
      <SubHeading title='' />
    </div>
    <article className='about-menu '>
      <div className=' about-menu_mates '>
        <div className='about-menu_items'>
          {data.works.map((work, index) => {
            console.log(work);
            return (
              <Works
                key={work.production + index}
                production={work.production}
                when={work.when}
                where={work.where}
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
