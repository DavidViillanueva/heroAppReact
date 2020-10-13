import React from 'react';

import queryString from 'query-string';

import HeroCard from '../heroes/HeroCard';
import useForm from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );

    const [ { filter }, handleInputChange ] = useForm({
        filter: q
    });
    
    const heroesFiltered = getHeroesByName( q );

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ filter }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={ handleSearch }>
                        <input 
                            type = "text"
                            name = "filter"
                            onChange = { handleInputChange }
                            value = { filter }
                            placeholder="Find your hero!"
                            className="form-control"
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        ( q==='' ) &&
                            <div className="alert alert-info">
                                Search your favorite hero!
                            </div>
                    }
                    
                    {
                        ( q !== '' && heroesFiltered.length === 0) &&
                            <div className="alert alert-danger">
                                No hero find!
                            </div>
                    }

                    {
                        heroesFiltered.map( hero =>
                            <HeroCard 
                                key = { hero.id }
                                {...hero}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
