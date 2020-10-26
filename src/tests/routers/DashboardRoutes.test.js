import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import DashboardRoutes from '../../routers/DashboardRoutes';


describe('<DashboardRoutes> test', () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'David'
        }
    }

    test('should render correctly', () => {


        const wrapper = mount(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <DashboardRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( wrapper.find('span').text().trim() ).toBe( contextValue.user.name );

        expect( wrapper ).toMatchSnapshot();
        
    })
    
    
})
