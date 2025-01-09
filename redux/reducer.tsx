  import { combineReducers } from '@reduxjs/toolkit';
  import productReducer from '@/features/product/product_slice';
  import userReducer from '@/features/user/user_slice';
  import paymentResucer from '@/features/payment/payment_slice';
  import cartReducer from '@/features/cart/cart_slice';
  import bookReducer from '@/features/book/book_slice';

  const rootReducer = combineReducers({
    products: productReducer,
    users: userReducer, 
    payments:paymentResucer,
    carts: cartReducer,
    books: bookReducer, 
    
  });

  export default rootReducer;