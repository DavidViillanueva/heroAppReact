import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import HeroeScreen from '../../../components/heroes/HeroeScreen';

describe('<HeroeScreen /> test', () => {

    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()
    };

    
    test('should render <Redirect /> if are not a hero in URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroeScreen history={ history }/>
            </MemoryRouter>
        );
        
        expect( wrapper.find('Redirect').exists() ).toBe( true );
        
    });

    test('should render the <HeroeScreen /> with the info of a Heroe reading the parameter in the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-thor']}>
                <Route path="/heroe/:heroeid" component={ HeroeScreen } />
            </MemoryRouter>
        );
        expect( wrapper.find('.row').exists() ).toBe( true );
    });

    test('should call the history.push function if the history.length<2', () => {
        const history = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
        };
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-thor']}>
                <Route 
                    path="/heroe/:heroeid" 
                    component={ () => <HeroeScreen history={ history }/>} 
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();

    });

    test('should call the history.goBack function if the history.length>2', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-thor']}>
                <Route 
                    path="/heroe/:heroeid" 
                    component={ () => <HeroeScreen history={ history }/>} 
                />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        
        expect( history.goBack ).toHaveBeenCalled();
        expect( history.push ).not.toHaveBeenCalled();
    });

    test('should not render a component if the URL was manipulated', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-thorasdgwe1r31']}>
                <Route 
                    path="/heroe/:heroeid" 
                    component={ () => <HeroeScreen history={ history }/>} 
                />
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('');
    })
    
    
    
    
    
})
