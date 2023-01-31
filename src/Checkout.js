import './Checkout.css';
function Checkout(props) {
    const cart = localStorage.getItem("cart"); //Locally stored array of objects
    const userCart = JSON.parse(cart); //Parsed array
    let subtotal = 0;
    let cartString = "";
    function CalculateTotal() {
        for (let i = 0; i < userCart.length; i++) {
            let productSubtotal = 0;
            productSubtotal = userCart[i].numInCart * userCart[i].price;
            subtotal += productSubtotal;
            cartString += ("Product " + userCart[i].id + "x" + userCart[i].numInCart + ", $" + productSubtotal + "\n");
        }
    }
    function CloseOrder(message) {
        window.alert(message);
        props.cancel(false);
    }
    return(
        <div className="checkout">
            {CalculateTotal()}
            <h1>Order</h1>
            <p>{cartString}</p>
            <p>Subtotal: ${subtotal}</p>
            <button className='buttons' onClick={() => CloseOrder("Order confrimed")}>Confrim</button>
            <button className='buttons' onClick={() => CloseOrder("Order cancelled")}>Cancel</button>
        </div>
    );
}

export default Checkout;