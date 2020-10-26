import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath',rest.location.pathname);
    
    return (
        <Route { ...rest }
            component = { ( props ) =>
                ( isAutenticated ) 
                    ? ( <Component {...props} /> )
                    : ( <Redirect to="/login" /> )
            }
        />
    )
};

PrivateRoute.propTypes = {
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

export default PrivateRoute;
