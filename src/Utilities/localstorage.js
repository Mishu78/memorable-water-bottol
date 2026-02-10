const getStoredCart=()=>{
  const storedCartString= localStorage.getItem('cart')
  if(storedCartString){
    return JSON.parse(storedCartString)
  }
  return [];
}
const saveCartToLS=cart=>{
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}
const addToLS=id=>{
    const cart=getStoredCart();
    cart.push(id);
<<<<<<< HEAD
    saveCartToLS(cart);
}
export {addToLS,getStoredCart}
=======
}
export {addToLS}
>>>>>>> 4e9f3798a24dcf6a0a50012f95ef9f014a67cc6d
