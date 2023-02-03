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

// export const login = createAsyncThunk(
//   "users/login",
//   async (user, { rejectWithValue }) => {
//     try {
//       const res = await axios.post(`${BASE_URL}users/login`, user);
//       let token = "Bearer " + res.data.token;
//       setCookie("token", token, 1);
//       return res.data.data.user;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const signup = createAsyncThunk(
//   "users/signup",
//   async (user, { rejectWithValue }) => {
//     console.log("signup");
//     const res = await axios.post(`${BASE_URL}users/signup`, user);
//     console.log(res.message);
//     if (res.data.data.user) {
//       let token = "Bearer " + res.data.token;
//       setCookie("token", token, 1);
//     }
//     return res.data.data.user;
//   }
// );

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
