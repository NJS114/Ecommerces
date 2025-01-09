import React from 'react';
import { useCartContext } from './context/CartContext';

const CheckoutButton = () => {
  const { cartItems } = useCartContext();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Votre panier est vide!');
    } else {
      window.location.href = '/checkout';
    }
  };

  return (
    <button onClick={handleCheckout} className="checkout-btn">
      Finaliser l'achat
    </button>
  );
};

export default CheckoutButton;
