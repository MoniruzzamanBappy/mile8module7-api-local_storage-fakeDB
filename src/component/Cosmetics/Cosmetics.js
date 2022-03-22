import React, { useEffect, useState } from 'react';
import { add, totalValue } from '../../utilities/calculate';
// import add from '../../utilities/calculate';
import Cosmetic from './../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const first =11;
    const second = 56465;
    const total = add(first, second);


    const [cosmetics, setCosmetics ] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    },[])

    const getTotal = totalValue(cosmetics);

    return (
        <div>
            <h1>Hello there!</h1>
            <p>Total: {getTotal}</p>
            <p>total: {total}</p>

            {
                cosmetics.map(cosmetic=><Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;