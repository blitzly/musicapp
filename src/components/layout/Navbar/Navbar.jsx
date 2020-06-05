import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import MenuItems from '../../../UI/MenuItems/MenuItems';
import './Navbar.scss';

export class Navbar extends Component {
  state = {
    isModalOpen: false,
    menuItems: [
      { itemName: 'Home', itemLink: '#home' },
      { itemName: 'Songs', itemLink: '#music', offset: '80' },
      // { itemName: 'Pictures', itemLink: 'pictures' },
      // { itemName: 'Upcoming Shows', itemLink: 'upcoming' },
      { itemName: 'Fan Wall', itemLink: '#fan-wall' },
      { itemName: 'Contact Info', itemLink: '#contact-info' },
    ],
  };

  handleClick = () => {
    const prevState = this.state.isModalOpen;
    this.setState({
        isModalOpen: !prevState,
    });

    if (document.body.classList.contains("backdrop-open")) {
      document.body.classList.remove("backdrop-open");
    } else {
      document.body.classList.add("backdrop-open");
    }
  };

  render() {
    const { isModalOpen, menuItems } = this.state;

    const modal = isModalOpen && (
      <Backdrop clicked={this.handleClick}>
        <MenuItems items={menuItems} />
      </Backdrop>
    );

    return (
      <div className='navbar'>
        {modal}
        <div className='toggleMenu'>
          <FontAwesomeIcon icon={isModalOpen ? faTimes : faBars} size='2x' onClick={this.handleClick} />
        </div>

        <div className='logo'>
          <img src='/img/luis-aldrey-logo.png' alt='Luis Aldrey Music' />
        </div>

        <div>&nbsp;</div>
      </div>
    );
  }
}

export default Navbar;
