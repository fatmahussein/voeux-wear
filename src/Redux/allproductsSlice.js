import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://fakestoreapi.com/products';

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const products = await axios(url);
  return products.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.products = action.payload;
    });

    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default productsSlice.reducer;
