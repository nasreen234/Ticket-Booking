/*import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exists = cartItems.find((i) => i._id === item._id);
    if (exists) {
      setCartItems(cartItems.map(items =>
      items._id === item._id ? { ...items, quantity: items.quantity + 1 } : items
    ));
  } 
  else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      return true;
    }
  };

  const increaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCartItems(cartItems
      .map(item =>
        item._id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQty, decreaseQty, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};*/
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage on first render
    const savedCart = localStorage.getItem('cartItems');  
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateCart = (action, item) => {
    const existingItem = cartItems.find((i) => i._id === item._id);

    switch (action) {
      case 'add':
        if (existingItem) {
          setCartItems(cartItems.map(i =>
            i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
          ));
        } else {
          setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        break;

      case 'increase':
        setCartItems(cartItems.map(i =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        ));
        break;

      case 'decrease':
        setCartItems(
          cartItems
            .map(i =>
              i._id === item._id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter(i => i.quantity > 0)
        );
        break;

      case 'remove':
        setCartItems(cartItems.filter(i => i._id !== item._id));
        break;

      default:
        console.warn("Unknown action:", action);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + (item.ticketprice || 0) * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
{/*import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const updateCart = (action, item) => {
    const existingItem = cartItems.find((i) => i._id === item._id);

    switch (action) {
      case 'add':
        if (existingItem) {
          // Increase quantity if already exists
          setCartItems(cartItems.map(i =>
            i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
          ));
        } else {
          // Add new item with quantity 1
          setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        break;

      case 'increase':
        setCartItems(cartItems.map(i =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        ));
        break;

      case 'decrease':
        setCartItems(
          cartItems
            .map(i =>
              i._id === item._id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter(i => i.quantity > 0)
        );
        break;

      case 'remove':
        setCartItems(cartItems.filter(i => i._id !== item._id));
        break;

      default:
        console.warn("Unknown action:", action);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + (item.ticketprice || 0) * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};*/}
{/*import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exists = cartItems.find((i) => i._id === item._id);
    if (exists) {
      alert('Item already in cart!');
      return false; // ❌ not added
  } 
  else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      return true;
    }
  };

  const increaseQty = (id) => {
    setCartItems(cartItems.map(item =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCartItems(cartItems
      .map(item =>
        item._id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item._id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQty, decreaseQty, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};*/}


