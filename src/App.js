import React, { Component } from 'react';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

class App extends Component {
  render( ) {
    return (
      <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
      </div>
    );
  }
}

export default App;
