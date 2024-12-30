import React from 'react';
import { useCartContext } from './context/CartContext';

const CartSummary = () => {
  const { cartItems } = useCartContext();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingCost = 5; // Exemple de frais de port
  const totalAmount = totalPrice + shippingCost;

  return (
    <div className="cart-summary">
      <h3>Résumé du Panier</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      <p>Frais de port: ${shippingCost}</p>
      <p>Total à payer: ${totalAmount}</p>
    </div>
  );
};

export default CartSummary;
