import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://fakestoreapi.com/products/categories';

const initialState = {
  category: [],
  isLoading: false,
  isError: false,
};

export const getCategory = createAsyncThunk('category/getCategory', async () => {
  const category = await axios(url);
  return category.data;
});

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.category = action.payload;
    });

    builder.addCase(getCategory.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default categorySlice.reducer;
