import React, { Component } from 'react';
import ContactItem from './ContactItem';
import logo from './logo.svg';
import './App.css';

const contacts = [{
		id: "ryan",
		first: "Ryan",
		last: "Florence",
		avatar: "http://ryanflorence.com/jsconf-avatars/avatars/ryan.jpg"
	}, {
		id: "mj",
		first: "Michael",
		last: "Jackson",
		avatar: "http://ryanflorence.com/jsconf-avatars/avatars/michael.jpg"
	}, {
		id: "jeremy",
		first: "Jeremy",
		last: "Ashkenas",
		avatar: "http://ryanflorence.com/jsconf-avatars/avatars/jeremy.jpg"
	}, {
		id: "yehuda",
		first: "Yehuda",
		last: "Katz",
		avatar: "http://ryanflorence.com/jsconf-avatars/avatars/yehuda.jpg"
	}];


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Contat List</h2>
        </div>
        { contacts.map(contact => <ContactItem first={contact.first} last={contact.last} avatar={contact.avatar} />) }
      </div>
    );
  }
}

export default App;
