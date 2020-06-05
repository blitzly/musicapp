import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function MenuItem(props) {
  return (
    <li>
      <AnchorLink href={props.link} offset={props.offset}>
        {props.item}
      </AnchorLink>
    </li>
  );
}

export default MenuItem;
