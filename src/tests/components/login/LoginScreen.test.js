import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';


describe('<LoginScreen /> test', () => {

    const history = {
        replace: jest.fn()
    }
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };
    
    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen 
                history = { history }
            />
        </AuthContext.Provider>
    );

    test('should render correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('should launch the dispatch and the navegation', () => {
        wrapper.find('button').prop('onClick')();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'David'
            }
        });
        expect( history.replace ).toHaveBeenCalled();
    })
    
})
