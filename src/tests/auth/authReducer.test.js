import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('authReducer test', () => {
    const user = {
        name: 'David',
        logged: false
    };

    test('should return the default state', () => {  
        const state = authReducer( user ,{});

        expect( state ).toEqual( user );
    });

    test('should authorice a user and change logged to true', () => {
        const action = {
            type: types.login,
            payload:{
                name: 'David'
            }
        };

        const state = authReducer( user , action );

        expect( state ).toEqual({
            logged: true,
            name: 'David'
        });
    });

    test('should delete a user name and change logged to false', () => {
        const action = {
            type: types.logout
        };

        const state = authReducer( user, action);

        expect( state ).toEqual({
            logged: false
        });
    });
    
})
