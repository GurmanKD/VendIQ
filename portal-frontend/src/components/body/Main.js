import React from 'react';
import './Main.css';
import Left from '../body/left/Main';
import Right from '../body/right/Main';
import Middle from '../body/middle/Main';


function Body() {
  return (
    <div className='main-body'>
      <Left />
      <Middle />
      <Right />
    </div>
  );
}

export default Body;
