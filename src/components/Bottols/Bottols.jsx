import { useState } from "react";
import { useEffect } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'
const Bottols = () => {
    const [bottols,setBottols]=useState([])
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('bottol.json')
        .then(res=>res.json())
        .then(data=>setBottols(data))
    },[])
    const handleAddToCart=bottol=>{
        const newCart=[...cart,bottol];
        setCart(newCart);
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