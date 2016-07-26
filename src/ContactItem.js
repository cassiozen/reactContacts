import React, { Component } from 'react';
import './ContactItem.css';

function ContactItem({first, last, avatar}) {

  return (
    <div className='contactItem'>
      <img src={avatar} className='contactImage' />
      <p className='contactName'>{first} {last}</p>
    </div>
  );
}

export default ContactItem;
