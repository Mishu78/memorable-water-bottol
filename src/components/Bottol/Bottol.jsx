import './Bottol.css'
const Bottol = ({bottol}) => {
    const {name,img,price}=bottol;
    return (
        <div className="bottol">
            <h3>Bottol:{name}</h3>
            <img src={img} alt="" />
            <p>Price;${price}</p>
        </div>
    );
};

export default Bottol;