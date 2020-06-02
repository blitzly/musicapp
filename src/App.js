import React from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import Navbar from './components/layout/Navbar/Navbar';
import Showcase from './components/showcase/showcase';
import Songs from './components/musicPlayer/Songs';
// import IgShows from './components/layout/IgShows';
import FanWall from './components/layout/FanWall';
// import Venues from './components/layout/Venues';
import Footer from './components/layout/Footer';
import PoweredBy from './components/layout/PoweredBy';
import './App.css';

function App() {
  return (
    <div>
      <span id='home'></span>
      <Navbar />
      <Showcase />
      <span id='music'></span>
      <Songs />
      <span id='fan-wall'></span>
      <FanWall />
      <span id='contact-info'></span>
      <Footer />
      <PoweredBy />
    </div>
  );
}

export default App;
