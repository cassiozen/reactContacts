import React, { Component } from 'react';
import ContactItem from './ContactItem';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    fetch('http://addressbook-api.herokuapp.com/contacts')
    .then(response => response.json())
    .then(responseData => {
      responseData.contacts.push({first: "Cassio"})
      this.setState({contacts:responseData.contacts})
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Contat List</h2>
        </div>
        { this.state.contacts.map(contact => <ContactItem key={contact.id} first={contact.first} last={contact.last} avatar={contact.avatar} />) }
      </div>
    );
  }
}

export default App;
