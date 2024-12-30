import React from 'react';
import { useCartContext } from './context/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const CartPage = () => {
  const { cartItems } = useCartContext();

  if (cartItems.length === 0) {
    return <p>Votre panier est vide.</p>;
  }

  return (
    <div className="cart-page">
      <h2>Votre Panier</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <CartSummary />
    </div>
  );
};

export default CartPage;
