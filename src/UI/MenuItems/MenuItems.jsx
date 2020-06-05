import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import './MenuItems.scss';

function MenuItems(props) {
  const items = props.items.map((item, id) => {
    return (
      <MenuItem
        key={id}
        link={item.itemLink}
        item={item.itemName}
        offset={item.offset}
      />
    );
  });
  return <ul className='menuItems'>{items}</ul>;
}

export default MenuItems;
