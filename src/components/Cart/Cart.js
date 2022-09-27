import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    //console.log(cart)

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity)
        shipping = shipping + product.shipping

    }

    let tax = (total * .1).toFixed(2)
    tax = parseFloat(tax)

    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>order sumury</h2>
            <p>Selected items : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Shipping Cost: ${shipping}</p>
            <p>Tax amount : ${tax}</p>
            <h5>Grand Total : ${grandTotal}</h5>
        </div>
    );
};

export default Cart;