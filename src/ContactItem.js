import React, { Component, PropTypes } from 'react';
import './ContactItem.css';

function ContactItem({first, last, email, avatar}) {

  return (
    <div className='contactItem'>
      <img src={avatar} className='contactImage' />
      <p className='contactName'>{first} {last}</p>
      <p className='contactEmail'>Email: {email}</p>
    </div>
  );
}

ContactItem.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string.isRequired
}

ContactItem.defaultProps = {
  email: 'No email supplied',
  avatar: 'https://bytesizemoments.com/wp-content/uploads/2014/04/placeholder3.png'
}


export default ContactItem;
