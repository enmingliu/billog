import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from './Auth';

class Callback extends Component {
    async componentDidMount() {
        // fetches user info sent by Auth0
        await auth0Client.handleAuthentication();
        // redirects user to home page after authentication
        this.props.history.replace('/');
    }

    render() {
        return (
            // renders loading message 
            <p>Loading profile...</p>
        );
    }
}

export default withRouter(Callback);