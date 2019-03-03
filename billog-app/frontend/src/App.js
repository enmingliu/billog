import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Posts from './Posts/Posts';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={posts}/>
        <Route exact path='/post/:postId' component={post}/>
      </div>
    );
  }
}

export default App;
