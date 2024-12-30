import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '@/features/product/product_slice';
import userReducer from '@/features/user/user_slice';
import paymentResucer from '@/features/payment/payment_slice';

const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer, 
  payments:paymentResucer,
  
});

export default rootReducer;