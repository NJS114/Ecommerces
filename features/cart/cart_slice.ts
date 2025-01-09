import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { BasketItem } from "@/models/cart/cart_basket-item"; // Modèle des articles dans le panier
import { RootState } from '@/redux/store';
import { BasketService } from "@/api/api_basket"; // Votre service pour gérer les requêtes API

// Initialisation de l'état du panier

interface CartState {
  basketItems: BasketItem[]; // Liste des articles dans le panier
  status: 'idle' | 'loading' | 'succeeded' | 'failed'; // Statut de la requête API
  error: string | null; // Erreur potentielle lors des opérations
}

const initialState: CartState = {
  basketItems: [],
  status: 'idle',
  error: null,
};

// Service pour interagir avec le panier via l'API
const basketService = new BasketService();

// Action asynchrone pour récupérer les articles du panier
export const fetchBasketItems = createAsyncThunk<BasketItem[], string>(
  'cart/fetchBasketItems', 
  async (userId: string) => {
    const response = await basketService.getBasketByUserId(userId); 
    return response; 
  }
);

// Action asynchrone pour ajouter un article au panier
export const addToBasket = createAsyncThunk<BasketItem, { userId: string, basketItem: BasketItem }>(
  'cart/addToBasket', 
  async ({ userId, basketItem }) => {
    const response = await basketService.addToBasket(userId, basketItem);
    return response; 
  }
);

// Création du slice du panier
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action pour vider le panier
    emptyBasket: (state) => {
      state.basketItems = [];
    },

    // Action pour supprimer un article du panier
    removeItemFromBasket: (state, action: PayloadAction<string>) => {
      state.basketItems = state.basketItems.filter(item => item.productId !== action.payload);
    },

    updateItemQuantity: (state, action: PayloadAction<{ itemId: string, quantity: number }>) => {
      const item = state.basketItems.find(item => item.productId === action.payload.itemId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBasketItems.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBasketItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.basketItems = action.payload;
      })
      .addCase(fetchBasketItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      })
      .addCase(addToBasket.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToBasket.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.basketItems.push(action.payload);
      })
      .addCase(addToBasket.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      });
  }
});

// Export des actions
export const { emptyBasket, removeItemFromBasket, updateItemQuantity } = cartSlice.actions;

// 
export const selectBasketItems = (state: RootState) => state.carts.basketItems;
export const selectBasketStatus = (state: RootState) => state.carts.status;
export const selectBasketError = (state: RootState) => state.carts.error;

export default cartSlice.reducer;
