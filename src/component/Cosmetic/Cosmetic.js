import React from 'react';
import { addToDB, removeFromDB } from '../../utilities/fakedb';

import './Cosmetic.css'

const Cosmetic = (props) => {
    const {id, price, name} = props.cosmetic;
    const AddtoCart = (id)=>{
        addToDB(id);
    }
    // const addToCart = ()=> AddtoCart(id);


    const removeFromCart = (id)=>{
        removeFromDB(id);
    }

    return (
        <div className='item'>
            <h2>Buy this {name}</h2>
            <p>Only for {price}</p>
            {/* <button onClick={addToCart}>Add to cart</button> */}
            <button onClick={()=> AddtoCart(id)}>Add to cart (Short-Cut)</button>
            <button onClick={()=> removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;