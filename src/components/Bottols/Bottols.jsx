import { useState } from "react";
import { useEffect } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'

import { addToLS, getStoredCart, removeFromLS } from "../../Utilities/localstorage";

const Bottols = () => {
    const [bottols,setBottols]=useState([])
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('bottol.json')
        .then(res=>res.json())
        .then(data=>setBottols(data))
    },[])

    //load cart from local storage
    useEffect(()=>{
        if(bottols.length>0){
            const storedCart=getStoredCart();
        console.log(storedCart)
        const savedCart=[];
        for(const id of storedCart){
            console.log(id);
            const bottol=bottols.find(bottol=>bottol.id===id);
            if(bottol){
                savedCart.push(bottol);
            }
        }
        setCart(savedCart);
        }
    },[bottols])
    const handleAddToCart=bottol=>{
        const newCart=[...cart,bottol];
        setCart(newCart);
        addToLS(bottol.id);
    }
    const handleRemoveFromCart=id=>{
//visual cart remove
//remove from local storage
removeFromLS(id);
    }
    return (
        <div>
         <h2>Bottols avaiable:{bottols.length}</h2>  
         <h2>Cart:{cart.length}</h2>  
        <div className="bottol-container">
             {
            bottols.map(bottol=><Bottol key={bottol.id}bottol={bottol} handleAddToCart={handleAddToCart}></Bottol>)
         } 
        </div>
        </div>
    );
};

export default Bottols;