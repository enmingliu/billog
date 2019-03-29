import React from 'react';
// withRouter: component with navigation capabilities
import {Link, withRouter} from 'react-router-dom';
// our singleton instance of the Auth class
import auth0Client from '../Auth'

function NavBar(props) {
    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };

    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/">
                Bill's Project Corner!
            </Link>
            {
                !auth0Client.isAuthenticated() && // when user is unauthenticated
                <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
            }
            {
                auth0Client.isAuthenticated() && // when user is already authenticated
                <div>
                    <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                    <button className="btn btn-dark" onClick={ () => { signOut() } }>Sign Out</button>
                </div>
            }
        </nav>
    )
}

export default withRouter(NavBar);