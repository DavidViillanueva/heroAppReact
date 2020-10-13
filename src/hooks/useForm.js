import { useState } from 'react';

//retorna los valores de los inputs en el formulario en forma de un objeto
//ese objeto es el inicial y debe venir cada key correspondida al name del input
//por ejemplo: input con nombre "name" seria un initial state de la siguiente manera
// useForm({ name: '' }) y retorna ese name actualizado en el change
//ejemplo de uso:
//  const [ {name}, handleInputChange, reset ] = useForm({ name: '' })
// el input deberia seguir la siguiente logica
// <input name="name" value={ name } onChange={ handleInputChange } />

const useForm = ( initialState = {}) => {

    const [ values , setValues ] = useState( initialState );

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        })
    };

    return [ values, handleInputChange , reset ];
}

export default useForm;
