import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/NavBar';
import { types } from '../../../types/types';


describe('<Navbar /> test', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        listen: jest.fn(),
        location: {},
        createHref: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'David'
        }
    };

    afterEach(
        () => jest.clearAllMocks()
    )

    const wrapper = mount(
        <MemoryRouter>
            <AuthContext.Provider value={ contextValue }>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </AuthContext.Provider>
        </MemoryRouter>
    )    
    
    test('should render correctly', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe( contextValue.user.name );
    });

    test('should logout on click and call the dispatch and history.replace', () => {
        wrapper.find('button').prop('onClick')();
        
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.logout
        })

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');

    });
    
    
})
