import React from 'react';
import { useCartContext } from '@/components/cart/context/CartContext';
import CartItem from '../../components/cart/CartItem';
import CartSummary from '../../components/cart/CartSummary';
import { BasketItem } from '@/models/cart/cart_basket-item';

const CartPage = () => {
  const { cartItems } = useCartContext();

  // Vérification pour s'assurer que cartItems est un tableau
  if (!Array.isArray(cartItems)) {
    return <p>Une erreur s'est produite avec votre panier.</p>;
  }

  if (cartItems.length === 0) {
    return <p>Votre panier est vide.</p>;
  }

  return (
    <div className="cart-page">
      <h2>Votre Panier</h2>

      {/* Looping through cart items to display each item */}
      <div className="cart-items">
        {cartItems.map((item: BasketItem) => (
          <CartItem key={item.productId} {...item} />
        ))}
      </div>

      {/* Cart Summary */}
      <CartSummary />
    </div>
  );
};

export default CartPage;
