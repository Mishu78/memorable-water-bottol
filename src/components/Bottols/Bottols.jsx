import { useState } from "react";
import { useEffect } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'
const Bottols = () => {
    const [bottols,setBottols]=useState([])
    useEffect(()=>{
        fetch('bottol.json')
        .then(res=>res.json())
        .then(data=>setBottols(data))
    },[])
    return (
        <div>
         <h2>Bottols here:{bottols.length}</h2>  
        <div className="bottol-container">
             {
            bottols.map(bottol=><Bottol key={bottol.id}bottol={bottol}></Bottol>)
         } 
        </div>
        </div>
    );
};

export default Bottols;