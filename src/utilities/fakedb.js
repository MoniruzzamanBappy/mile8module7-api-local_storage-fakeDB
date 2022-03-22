// use local storage to manage shopping cart 

const addToDB = id =>{
    let shoppingCart = {};

    const storeCart = localStorage.getItem('added-into-Cart');

    if(storeCart){
        shoppingCart = JSON.parse(storeCart);
    }
    
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity =quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('added-into-Cart', JSON.stringify(shoppingCart))
}

const removeFromDB = id=>{
    const storedCart = localStorage.getItem('added-into-Cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id]
            localStorage.setItem('added-into-Cart', JSON.stringify(shoppingCart))
        }
    }
}

export {addToDB, removeFromDB}