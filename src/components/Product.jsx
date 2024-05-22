import React, { useState } from "react";

// Product component
export default Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};