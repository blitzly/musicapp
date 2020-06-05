import React from 'react';
import './Showcase.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Background from '../../assets/img/luisaldrey_miami.jpg';

function showcase() {
  return (
    <section
      className='showcase'
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 105%',
      }}
    >
      <div className='container'>
        <div className='showcase-content'>
          <h1 className='display-1 secondary-color'>CLASSIC SONGS</h1>
          <h2 className='display-2 text-slim'>That still sound fresh</h2>
          <p className="showcase-paragraph">
            Luis Aldrey recreates the sound of those songs that have had a
            tremendous impact in the life of each and one of us. The repertoire
            of classic songs includes early Rock & Roll, Pop, ballads, as well
            as classics in Spanish, Italian, Portuguese and Galician. Technology
            allows Luis Aldrey to leverage amazing backing tracks to support his
            versatile voice, which makes him an excellent alternative to liven
            up family celebrations and venues.
          </p>
          <p className='showcase-paragraph-display'>
            Thank you so much for visiting Luis Aldrey’s website, and feel free
            to listen to his demos.
          </p>

          <AnchorLink href='#music' className='btn showcase-link' offset='80'>
            Get started
          </AnchorLink>
        </div>
      </div>
    </section>
  );
}

export default showcase;
