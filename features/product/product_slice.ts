import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ProductState } from '@/models/product/product_state';
import { Product } from '@/models/product/product';
import { RootState } from '@/redux/store';



// État initial
const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
};

// Action asynchrone pour récupérer les produits (exemple avec une API)
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await fetch('/api/products'); // Remplacez par l'URL de votre API
    const data = await response.json();
    return data;
  }
);

// Création du slice avec Redux Toolkit
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Action pour ajouter un produit à l'état
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export des actions générées par le slice
export const { addProduct, removeProduct } = productSlice.actions;

// Sélecteurs pour accéder à l'état des produits
export const selectProducts = (state: RootState) => state.products.products;
export const selectLoading = (state: RootState) => state.products.status === 'loading';
export const selectError = (state: RootState) => state.products.error;

// Exportation du reducer
export default productSlice.reducer;
