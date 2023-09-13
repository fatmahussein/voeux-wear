import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import categoryReducer from './categorySlice';
import productsReducer from './allproductsSlice';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
