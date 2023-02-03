import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const initialState = {
  user: Cookies.get("token") ? JSON.parse(localStorage.getItem("user")) : "",

  isLoggedIn: Cookies.get("token")
    ? JSON.parse(localStorage.getItem("isLoggedIn"))
    : "",
};

export function setCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      if (action.payload) state.isLoggedIn = true;
      else {
        state.isLoggedIn = false;
      }
      if (Cookies.get("token")) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
