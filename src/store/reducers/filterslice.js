import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  category: [],
  price: 10000,
  rating: 5,
  categoryQuery: "",
  priceQuery: "",
  ratingQuery: "",
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.category = action.payload.category;
      state.price = action.payload.category;
      state.rating = action.payload.category;
      state.categoryQuery = action.payload.categoryQuery;
      state.priceQuery = action.payload.priceQuery;
      state.ratingQuery = action.payload.ratingQuery;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
