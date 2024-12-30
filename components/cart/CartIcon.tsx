import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Importez l'icône du panier
import { useCartContext } from './context/CartContext'; // Importez le CartContext

const CartIcon = () => {
  const { cartItems } = useCartContext(); // Accédez aux articles du panier depuis le context
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Calculez le nombre d'articles dans le panier
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setItemCount(count);
  }, [cartItems]);

  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" /> {/* Affiche l'icône du panier */}
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>} {/* Affiche le nombre d'articles */}
    </div>
  );
};

export default CartIcon;
