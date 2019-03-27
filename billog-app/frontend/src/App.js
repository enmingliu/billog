import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Posts from './Posts/Posts';
import Post from './Post/Post';
import Callback from './Callback';
import SecuredRoute from './SecuredRoute/SecuredRoute';
import NewPost from './NewPost/NewPost';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Posts}/>
        <Route exact path='/post/:postId' component={Post}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-post' component={NewPost}/>
      </div>
    );
  }
}

export default App;
