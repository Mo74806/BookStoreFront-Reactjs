import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

import axios from "axios";
import { setCookie } from "./userSlice";
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const createPurchase = createAsyncThunk(
  "Purchase/createPurchase",
  async (data, { rejectWithValue }) => {
    try {
      let res = await axios.post(
        `${BASE_URL}purchaces`,
        {
          items: data.cart,
          status: "reviewing",
          handleOffline: false,
        },
        { headers: { authorization: Cookies.get("token") } }
      );
      let { id } = res.data.data.data;

      await setCookie("purchase", id, 1);
      return { ...res.data.data.data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  purchase: "",
  isLoading: null,
  serverError: null,
};
const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {},
  extraReducers: {
    [createPurchase.pending]: (state, action) => {
      state.isLoading = true;
      state.serverError = null;
      state.changed = false;
    },
    [createPurchase.fulfilled]: (state, action) => {
      state.purchase = action.payload;
      state.serverError = null;
      state.isLoading = false;
    },
    [createPurchase.rejected]: (state, action) => {
      state.serverError = action.payload;
      state.isLoading = false;
    },
  },
});

export const purchaseReducer = purchaseSlice.reducer;
export const purchaseActions = purchaseSlice.actions;
