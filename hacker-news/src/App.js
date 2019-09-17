import React, { Component } from 'react';
import Nav from './Nav';
import Posts from './Posts';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Nav />
        <Posts type='top' />
        <Posts type='new' />
      </div>
    );
  }
}

export default App;
