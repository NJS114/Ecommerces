import React from 'react';
import { useCartContext } from './context/CartContext';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity }) => {
  const { removeFromCart, updateQuantity } = useCartContext();

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateQuantity(id, parseInt(event.target.value));
  };

  return (
    <div className="cart-item">
      <h5>{name}</h5>
      <p>Prix: ${price}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={handleQuantityChange}
      />
      <button onClick={() => removeFromCart(id)}>Supprimer</button>
    </div>
  );
};

export default CartItem;
