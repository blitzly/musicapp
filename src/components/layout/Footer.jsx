import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
//import { fab } from '@fortawesome/free-brands-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Footer() {
  return (
    <footer>
        <section>
            <div className='container'>
            <div className='about-footer'>
            <div>
                <img src='img/luis-aldrey-logo.png' alt='Luis Aldrey' />
            </div>
            <div>
                <p>
                Music has always been a form of language that has brought people
                together. Throughout history, music has been composed and played
                to celebrate life in different ways. Music takes you to imaginary
                places where you can feel free, and perhaps even take you back in
                time.
                </p>
            </div>
            <div>
                {/* <ul className='social'>
                <li>
                    <a href='/'>
                    <FontAwesomeIcon icon={fab} />
                    </a>
                </li>
                <li>
                    <a href='/'>
                    <i className='fa fa-instagram'></i>
                    </a>
                </li>
                <li>
                    <a href='/'>
                    <FontAwesomeIcon icon={['fab', 'apple']} />
                    </a>
                </li>
                </ul> */}
            </div>
            </div>
            <div className='site-map-footer'>
            <h2>Sitemap</h2>
            <ul>
                <li>
                <FontAwesomeIcon icon={faChevronRight} />{' '}
                <AnchorLink href='#home' offset='80'>
                    About
                </AnchorLink>
                </li>
                <li>
                <FontAwesomeIcon icon={faChevronRight} />{' '}
                <AnchorLink href='#music' offset='80'>
                    Music
                </AnchorLink>
                </li>
                <li>
                <FontAwesomeIcon icon={faChevronRight} />{' '}
                <AnchorLink href='#fan-wall'>Fan Wall</AnchorLink>
                </li>
                {/* <li>
                <FontAwesomeIcon icon={faChevronRight} />{' '}
                <a href='/'>Upcoming Shows</a>
                </li>
                <li>
                <FontAwesomeIcon icon={faChevronRight} /> <a href='/'>Contact</a>
                </li> */}
            </ul>
            </div>
            <div className='contact-info'>
            <h2>Contact Info</h2>
            <h5 className='email'>
                <FontAwesomeIcon icon={faChevronRight} /> Email
            </h5>
            <a href='mailto:info@luisaldreymusic.com'>info@luisaldreymusic.com</a>
            {/* <h5 className='phone'>
                <FontAwesomeIcon icon={faChevronRight} /> Phone
            </h5>
            <a href='tel:'>+1 123-4567-9900</a> */}
            </div>
            <div className='subscribe'>
            <h2>Subscribe</h2>
            <form action='/' className='subscribe-form'>
                <input type='text' id='email' />
                <button>
                <i className='fa fa-paper-plane'></i>
                </button>
            </form>
            <p>
                <input type='checkbox' id='have-read-terms' /> I have read and agree
                to the <a href='/'>terms & conditions</a>
            </p>
            </div>
        </div>
        </section>
    </footer>
  );
}

export default Footer;
