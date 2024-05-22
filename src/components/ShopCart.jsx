import React from 'react';

// Shopping cart component
const ShopCart = ({ cart , updateData }) => {

  


  return (
    <div>
      <h2>Shopping Cart:--  {updateData}</h2>

      
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopCart;