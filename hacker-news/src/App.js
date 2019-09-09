import React, { Component } from 'react';
import Nav from './Nav';
import Top from './Top';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Nav />
        <Top />
      </div>
    );
  }
}

export default App;
