import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/bookSlice";
import { cartReducer } from "./reducers/CartSlice";
import { userReducer } from "./reducers/userSlice";
import { purchaseReducer } from "./reducers/PurchaseSlice";
import { filterReducer } from "./reducers/filterslice";
export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    user: userReducer,
    purchase: purchaseReducer,
    filters: filterReducer,
  },
});
