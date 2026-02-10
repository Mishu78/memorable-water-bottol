import './Bottol.css'
const Bottol = ({bottol,handleAddToCart}) => {
    const {name,img,price}=bottol;
    return (
        <div className="bottol">
            <h3>Bottol:{name}</h3>
            <img src={img} alt="" />
            <p>Price;${price}</p>
            <button onClick={()=>handleAddToCart(bottol)}>Purchase</button>
        </div>
    );
};

export default Bottol;