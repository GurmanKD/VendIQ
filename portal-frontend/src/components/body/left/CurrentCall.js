import React from 'react';
import './CurrentCall.css';

const CurrentCall = (props) => {
  return (
    <div className='phone'>
      <div className='callerid'>
        <div className='info'>
          <i className='fas fa-user-circle'></i>
          <div>
            <h2>Akarsh</h2>
            <p>Mobile +91124698262</p>
          </div>
        </div>
        <div className='options'>
          <div className='1'>
            <i className='fas fa-microphone-slash'></i>
            <i className='fas fa-pause'></i>

            <i className='fas fa-phone-alt decline'></i>
          </div>

          <span>Mute</span>
          <span>Hold</span>
          <span style={{ paddingLeft: '1rem' }}>Decline</span>

          <div className='text1'></div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCall;
