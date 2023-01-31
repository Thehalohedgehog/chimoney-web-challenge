import logo from './logo.svg';
import './Product.css';
import { useState } from 'react';
import ProductPage from './ProductPage';
function Product(props) {
    const [numAdded, setAdded] = useState(0);
    const [inCart, setInCart] = useState(0);
    const [showingPage, setShowing] = useState(false);
    const productInfo = {
        id: props.productID,
        numInCart: 0,
        price: props.price,
        totalPrice: 0
    }
    function AddToCart() {
        setInCart(parseInt(numAdded));
        productInfo.numInCart = numAdded;
        productInfo.totalPrice = numAdded*productInfo.price;
        props.addToParentCart(productInfo);
    }
    function RemoveFromCart() {
        props.remove(productInfo)
    }
    function ShowPage(x) {
        setShowing(x);
    }
    return(
        <div>
            <img src={logo} className='imageLogo' alt='logo' />
            <h1 className='title'>Product {props.productID}</h1>
            <p name='productPrice' id='prodPrice'>Price: $ {productInfo.price}</p>
            <input type="number" id="quantity" name="quantity" min="0" max="10" onChange={(e) => setAdded(e.target.value)}/>
            <button className='buttons' id='addToCart' onClick={AddToCart}>Add to cart</button>
            <button className='buttons' id='remove' onClick={RemoveFromCart}>Remove all</button>
            <button className='buttons' id='show' onClick={() => ShowPage(true)}>Show info</button>
            <p>In Cart: {inCart}</p>
            <p name='subtotal' id='subtotal'>Subtotal: $ {productInfo.price*inCart}</p>
            {showingPage === true && <ProductPage AddCart={AddToCart} hidePage={ShowPage} Info={productInfo} />}
        </div>
    );
}

export default Product;