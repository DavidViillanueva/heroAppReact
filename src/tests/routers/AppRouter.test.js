import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe('<AppRouter /> test', () => {

    test('should render the login view if are not authenticated', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('should render MarvelView component if are authenticated', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'David'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBe( true );

    })
    
    
    
})
