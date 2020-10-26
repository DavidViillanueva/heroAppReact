import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import{ types} from '../../types/types';

const LoginScreen = ({ history }) => {
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
    
        const lastPath = localStorage.getItem('lastPath') || "/";
        const action = {
            type: types.login,
            payload: {
                name: 'David'
            }
        }
        dispatch( action );
        //seteo en el contexto de la app el usuario sin validacion

        history.replace( lastPath );
    };

    return (
        <div>
            <div className="container mt-5">
                <h1>Login</h1>
                <hr />
                <button
                    className="btn btn-primary"
                    onClick={ handleLogin }
                >
                    Login
                </button>

            </div>
        </div>
    )
}

export default LoginScreen;
