/*import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItems = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

  return (
    <>
      <div className="container">/*
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id}>
              {item.name} - ₹{item.ticketprice} × {item.quantity} = ₹{item.ticketprice * item.quantity}
              <br />
              <button className="ms-1" onClick={() => increaseQty(item._id)}>+</button>
              <button onClick={() => decreaseQty(item._id)}>-</button>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CartItems;*/
/*import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Navbar from '../Component/Navbar';
import { toast } from 'react-toastify';
const CartItems = () => {
  const { cartItems, updateCart,getTotalPrice } = useContext(CartContext);
  const handleUpdate = (action, item) => {
    updateCart(action, item);
    if (action === 'remove') toast.info(`${item.name} removed from cart`);
    else toast.success(`${item.name} quantity ${action}d`);
  };


  return (
    <>
    <Navbar/>
      <div className="container border border-dark p-4 rounded-3">
        <div className="row">
          <div className="col-md-6"
      style={{
      display:'flex',
      flexDirection:'column',
      border:'2px',
      backgroundColor:'white',
      margin:'100px',
      }}>
        <h2 className="text-center" >🛒 Shopping Cart</h2><hr></hr>
        {cartItems.length === 0 ? (
          <p className="text-center">No items in cart.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id}>
                   <div className="col-md-3">
               <img
      src={item.image}
      alt={item.name}
      style={{ width: '100px', height:"200px",objectFit: "contain" }} /> 
      </div> 
      <div className="col-md-6">
    
    <h5><strong>MOVIE NAME: { item.name}</strong></h5>
    <h5><strong>TICKET PRICE: ₹{ item.ticketprice}</strong></h5>
    <h5><strong>RELEASE DATE: {item.releasedate}</strong></h5>
     <h6>
                  <strong>Total:</strong> ₹{item.ticketprice * item.quantity}
                </h6>
              </div>

              {/*{ item.name} - ₹{item.ticketprice}  × {item.quantity} = ₹{item.ticketprice * item.quantity}
  <div className="col-md-3 text-center">
                <div className="mb-2">
              <button className="ms-2" onClick={() => handleUpdate('increase',item)}>+</button>
              <button onClick={() => handleUpdate('decrease',item)}disabled={item.quantity === 1}>-</button>
              <button onClick={() => handleUpdate('remove',item)}>Remove</button><hr></hr>
              </div>
                <span>Quantity: {item.quantity}</span>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <h4 className="text-end mt-4">Total Amount: ₹{getTotalPrice()}</h4>
        )}
      </div>
    </>
  );
};

export default CartItems;*/

import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Navbar from '../Component/Navbar';
import { toast } from 'react-toastify';


const CartItems = () => {
  const { cartItems, updateCart, getTotalPrice } = useContext(CartContext);

  const handleUpdate = (action, item) => {
    updateCart(action, item);
    if (action === 'remove') toast.info(`${item.name} removed from cart`);
    else toast.success(`${item.name} quantity ${action}d`);
  };

  return (
    <>
      <Navbar />
      <div className="container border border-dark p-4 rounded-3 mt-5 bg-muted">
        <h2 className="text-center mb-4">🛒 Shopping Cart</h2>
        <hr />

        {cartItems.length === 0 ? (
          <p className="text-center">No items in cart.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="row align-items-center mb-4 border p-3 rounded-2 bg-light">
              {/* Image */}
              <div className="col-md-3">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                  className="img-fluid"
                />
              </div>

              {/* Info */}
              <div className="col-md-6">
                <h5><strong>Movie:</strong> {item.name}</h5>
                <h6><strong>Price:</strong> ₹{item.ticketprice}</h6>
                <h6><strong>Release Date:</strong> {item.releasedate}</h6>
                <h6><strong>Total:</strong> ₹{item.ticketprice * item.quantity}</h6>
              </div>

              {/* Controls */}
              <div className="col-md-3 text-center">
                <div className="mb-2">
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => handleUpdate('increase', item)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleUpdate('decrease', item)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleUpdate('remove', item)}
                  >
                    Remove
                  </button>
                </div>
                <span>Quantity: {item.quantity}</span>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <h4 className="text-end mt-4">Total Amount: ₹{getTotalPrice()}</h4>
        )}
      </div>
    </>
  );
};

export default CartItems;
