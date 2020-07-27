import React from 'react';
import {Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * Component which allows other components to be rendered if the user
 * has already logged in 
 */
const AuthedRouter = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
                return (
                    rest.authedUser
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                      }} />
                );
            }
        }/>
    );
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default withRouter(connect(mapStateToProps)(AuthedRouter));