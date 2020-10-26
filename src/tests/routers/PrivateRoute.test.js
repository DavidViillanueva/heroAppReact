import React from 'react';
import { mount } from 'enzyme';
import PrivateRoute from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('<PrivateRoute /> test', () => {

    const props = {
        location: {
            pathname: '/'
        }
    };

    Storage.prototype.setItem = jest.fn();

    test('should render the component if are a user authenticated and save it in the localStorage', () => {

        const wrapper = mount( 
            <MemoryRouter>
                <PrivateRoute
                    isAutenticated={ true }
                    component={ ()=> <span>Test</span> }
                    {...props}
                />
            </MemoryRouter>
        );
        
        expect( wrapper.find('span').exists() ).toBe( true );
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/');

    });

    test('should not render the component if not are a user authenticated', () => {

        const wrapper = mount( 
            <MemoryRouter>
                <PrivateRoute
                    isAutenticated={ false }
                    component={ ()=> <span>Test</span> }
                    {...props}
                />
            </MemoryRouter>
        );
        
        expect( wrapper.find('span').exists() ).toBe( false );
        
    })
    
    
    
})
