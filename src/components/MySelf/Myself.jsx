import React, { useContext } from 'react';
import Special from '../Special/Special';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = ({ring}) => {
    const ring2 = useContext(RingContext);
    return (
        <div>
            <h2>MySelf</h2>
            <Special  ring={ring2}></Special>
        </div>
    );
};

export default Myself;