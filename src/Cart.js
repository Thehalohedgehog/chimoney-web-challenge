import { useState } from 'react';
import Product from './Product';
import Checkout from './Checkout';
import './Cart.css';
function Cart() {
    const cart = localStorage.getItem("cart"); //Locally stored array of objects
    const userCart = JSON.parse(cart); //Parsed array
    const [isOrdering, setOrdering] = useState(false);
    function AddToCart(productAdded) {
        let inCart = false;
        for (let i = 0; i < userCart.length; i++) {
            if (userCart[i].id === productAdded.id) {
                inCart = true;
            }
        }
        if (inCart === false) { //Not already in cart
            userCart.push(productAdded);
            window.alert("Added " + productAdded.numInCart + " of " + productAdded.id + " to cart!");
        }
        else { //Already in cart
            let index = userCart.findIndex(x => x.id === productAdded.id);
            
            userCart[index].numInCart = productAdded.numInCart;
            window.alert("Updated product " + productAdded.id + " to " + productAdded.numInCart + " in cart!");
        }
        localStorage.setItem("cart", JSON.stringify(userCart));
    }

    function RemoveFromCart(productRemoved) {
        let index = userCart.findIndex(x => x.id === productRemoved.id);
        userCart.splice(index, 1);
        //localStorage.setItem("cart", JSON.stringify(userCart));
        window.alert("Removed all of " + productRemoved.id + " from cart!");
    }

    function ShowCart() {
        let cartString = "";
        for (let i = 0; i < userCart.length; i++) {
            cartString += ("Product " + userCart[i].id + ": " + userCart[i].numInCart + "\n");
        }
        window.alert(cartString);
    }

    function PlaceOrder(x) {
        setOrdering(x);
    }

    return(
        <div>
            <Product addToParentCart={AddToCart} remove={RemoveFromCart} productID="001" price={100}/>
            <Product addToParentCart={AddToCart} remove={RemoveFromCart} productID="002" price={50}/>
            <button className='buttons' id='showCart' onClick={ShowCart}>Show Cart</button>
            <button className='buttons' id='order' onClick={() => PlaceOrder(true)}>Place Order</button>
            {isOrdering === true && <Checkout cart={userCart} cancel={PlaceOrder} />}

        </div>
    );
}

export default Cart;