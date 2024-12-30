import React from 'react';
import { useCartContext } from './context/CartContext';

const CheckoutButton = () => {
  const { cartItems } = useCartContext();

  const handleCheckout = () => {
    // Logique pour passer à la page de paiement
    if (cartItems.length === 0) {
      alert("Votre panier est vide!");
    } else {
      window.location.href = "/checkout"; // Exemple pour rediriger vers une page de paiement
    }
  };

  return (
    <button onClick={handleCheckout} className="checkout-btn">
      Finaliser l'achat
    </button>
  );
};

export default CheckoutButton;
