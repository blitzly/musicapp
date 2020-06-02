import React from 'react';
import Background from '../../assets/img/luisaldrey_miami.jpg';
import TestimonialPict1 from '../../assets/img/testimonial/ag_pict.jpg';

function FanWall() {
  return (
    <section
      className='fan-wall'
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0% 45%',
        // backgroundSize: 'cover'
      }}
    >
      <div className='container'>
        <div className='fan-pic'>
          {/* <img src='https://i.pravatar.cc/200' alt='Fan Wall' /> */}
          <img src={TestimonialPict1} alt='Fan Wall' />
        </div>
        <div id='fan-comment-container'>
          <div className='fan-comment'>
            <p>
              Luis is a great musician. He makes you travel around the world
              with his repertoire. Had such a great evening with my wife.
            </p>
          </div>
          <p className='fan-name'>Adrian</p>
        </div>
      </div>
    </section>
  );
}

export default FanWall;
