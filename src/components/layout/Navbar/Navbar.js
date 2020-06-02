import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import MenuItems from '../../../UI/MenuItems/MenuItems';
import './Navbar.css';

export class Navbar extends Component {
  state = {
    toggleModal: false,
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
    const prevState = this.state.toggleModal;
    this.setState({
      toggleModal: !prevState,
    });
  };

  render() {
    const modal = this.state.toggleModal && (
      <Backdrop clicked={this.handleClick}>
        <MenuItems items={this.state.menuItems} />
      </Backdrop>
    );

    return (
      <div className='navbar'>
        {modal}
        <div className='toggleMenu'>
          <FontAwesomeIcon icon={faBars} size='2x' onClick={this.handleClick} />
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
