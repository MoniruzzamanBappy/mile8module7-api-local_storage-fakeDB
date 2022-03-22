const add = (num1, num2)=>{
    return num1+num2;
}

const multiply = (num1, num2)=>{
    return num1*num2;
}


// const numbers = [12,32,422,42,243,4,42,42,432];
// const sumReducer = (previous, current)=> previous+current;
// const total = numbers.reduce( sumReducer,0)


const getTotalReducer = (product)=>{
    const Reducer = (previous, current)=> previous+current;
    const total = product.reducer(Reducer, 0);
    return total;
}

// export default add;

export {add, multiply, getTotalReducer as totalValue}