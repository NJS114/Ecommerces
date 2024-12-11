import { combineReducers } from '@reduxjs/toolkit';
import productReducer from '@/features/product/product_slice';
import userReducer from '@/features/user/user_slice';


const rootReducer = combineReducers({
  products: productReducer,
  users: userReducer, 
  
});

export default rootReducer;