import React from "react";
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }else{
        message = <div>
            <p><small>Thank for add to cart products</small></p>
        </div> 
    }
  return (
    <div>
      <h2 className={cart.length === 1 ? 'blue' : 'purple'}>Cart component: {cart.length}</h2>
      <p className={`bold bordered ${cart.length === 3  ? 'yellow' : 'purple'}`}>Something</p>
      {cart.length > 2 ? <span className="purple">Buy More</span> : <span>You are too much poor</span>}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name} <button
           onClick={()=>handleRemoveFromCart(tshirt._id)}
           >X</button>
        </p>
      ))}
      {
        cart.length === 2 && <p>Double bonanza!!!</p>
      }
      {
        cart.length === 3 || <h5>You must be add 3 product</h5>
      }
    </div>
  );
};

export default Cart;
