import React from 'react';
import './backdrop.css';

function Backdrop(props) {
  return (
    <div className='backdrop' onClick={props.clicked}>
      {props.children}
    </div>
  );
}

export default Backdrop;
