import React from 'react';
import './Backdrop.scss';

function Backdrop(props) {
  return (
    <div className='backdrop' onClick={props.clicked}>
      {props.children}
    </div>
  );
}

export default Backdrop;
