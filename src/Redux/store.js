import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import productsReducer from './allproductsSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
  },
});

export default store;
