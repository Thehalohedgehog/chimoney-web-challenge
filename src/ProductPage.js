import logo from './logo.svg';
import './Product.css';
import { useState } from 'react';
function ProductPage(props) {
    const [numAdded, setAdded] = useState(0);
    const [inCart, setInCart] = useState(0);
    const productInfo = props.Info;
    
    function UpdateCart() {
        props.AddCart();
    }
    function ClosePage() {
        props.hidePage(false);
    }
    function Setup() {
        //setInCart(props.Info.numInCart);
    }
    return(
        <div className='productPage'>
            {Setup()}
            <img src={logo} className='imageLogo' alt='logo' />
            <h1 className='title'>Product {productInfo.id}</h1>
            <p name='productPrice' id='prodPrice'>Price: $ {productInfo.price}</p>
            <input type="number" id="quantity" name="quantity" min="0" max="10" onChange={(e) => setAdded(e.target.value)}/>
            <button className='buttons' id='addToCart' onClick={UpdateCart}>Add to cart</button>
            <p>In Cart: {productInfo.numInCart}</p>
            <p name='subtotal' id='subtotal'>Subtotal: $ {productInfo.price*inCart}</p>
            <button className='buttons' id='close' onClick={ClosePage}>Close</button>
        </div>
    );
}

export default ProductPage;