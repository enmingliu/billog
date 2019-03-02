import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Posts from './Posts/Posts';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Posts/>
      </div>
    );
  }
}

export default App;
