import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';


describe('<SearchScreen /> test', () => {

    test('should render correctly (default values)', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <Route path="/search" component= { SearchScreen} />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search your favorite hero!');
    });

    test('should show a hero and put it in the input value if is passed by query', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <Route path="/search" component= { SearchScreen} />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batman');
        expect(wrapper.find('HeroCard').exists() ).toBe( true );
    });

    test('should show a error if the URL was manipulated and if the hero dont exist', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=batman123123"]}>
                <Route path="/search" component= { SearchScreen} />
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text().trim() ).toBe('No hero find!');
        expect(wrapper.find('HeroCard').exists() ).toBe( false );
    });

    test('should call the push on handleSubmit', () => {
        const history = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <Route 
                    path="/search" 
                    component= { () => <SearchScreen history= { history }/> } 
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change',{
            target: {
                name: 'filter',
                value: 'batman'
            }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( history.push ).toHaveBeenCalledWith('?q=batman');

    })
    
    
    
    
    
})
