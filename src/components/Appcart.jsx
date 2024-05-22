import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShopCart';

const Appcart = () => {
  // State for the shopping cart
  const [cart, setCart] = useState([]);

  // Function to add products to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove products from the cart
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item !== itemToRemove);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Simple Shopping Cart</h1>
      <ProductList onAddToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Appcart;
