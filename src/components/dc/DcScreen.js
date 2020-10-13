import React from 'react';
import HeroeList from '../heroes/HeroeList';

const DcScreen = () => {
    return (
        <>
            <h1>DC Comics</h1>
            <hr />
            <HeroeList publisher = "DC Comics" />
        </>
    )
}

export default DcScreen
