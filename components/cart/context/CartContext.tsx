import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { BasketItem } from '@/models/cart/cart_basket-item';

type CartContextType = {
  cartItems: BasketItem[];
  addToCart: (item: BasketItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  fetchCart: () => void;
  loading: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<BasketItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Sauvegarde le panier dans localStorage
  const saveCartLocally = useCallback((cart: BasketItem[]) => {
    setCart(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }, []);

  // Récupère le panier depuis localStorage
  const fetchCart = useCallback(() => {
    setLoading(true);
    const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (Array.isArray(localCart)) {
      setCart(localCart);
    } else {
      console.error('Le panier local n’est pas un tableau valide.');
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // Ajouter un article au panier
  const addToCart = (item: BasketItem) => {
    const updatedCart = [...cart, item];
    saveCartLocally(updatedCart);
  };

  // Supprimer un article du panier
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.productId !== id);
    saveCartLocally(updatedCart);
  };

  // Mettre à jour la quantité d'un article
  const updateQuantity = (id: string, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.productId === id ? { ...item, quantity } : item
    );
    saveCartLocally(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cartItems: cart, addToCart, removeFromCart, updateQuantity,fetchCart, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};
