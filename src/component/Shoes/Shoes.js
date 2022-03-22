import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const num1 = 12;
    const num2 = 5;
    const result = multiply(num1, num2);
    return (
        <div>
            <h2>There is Shoes!</h2>
            <p>Result: {result}</p>
        </div>
    );
};

export default Shoes;