import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://book-store-api-kappa.vercel.app/api/v1/";
let data;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("books");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
const initialState = {
  books: loadState(),
  book: false,
  isLoading: false,
  serverError: null,
  changed: false,
};

export const getAllBooks = createAsyncThunk(
  "Books/getAllBooks",
  async (filters, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}books?${filters || ""}`);
      localStorage.setItem("books", JSON.stringify(res.data.data.book));
      return res.data.data.books;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBook = createAsyncThunk(
  "Books/getBook",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}books/${id}`);
      return res.data.data.book;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.serverError = null;
      state.changed = false;
    },
    [getAllBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.serverError = null;
      state.isLoading = false;
    },
    [getAllBooks.rejected]: (state, action) => {
      state.serverError = action.payload;
      state.isLoading = false;
    },
    [getBook.pending]: (state, action) => {
      state.isLoading = true;
      state.serverError = null;
      state.changed = false;
    },
    [getBook.fulfilled]: (state, action) => {
      state.book = action.payload;
      state.serverError = null;
      state.isLoading = false;
    },
    [getBook.rejected]: (state, action) => {
      state.serverError = action.payload;
      state.isLoading = false;
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const booksActions = booksSlice.actions;
