import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/users/userSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
reducer: {
    counter: counterReducer,
    users: userReducer,
    cart: cartReducer,
},
});


/*configureStore() automatically:

Adds Redux DevTools

Adds thunk middleware

Combines reducers */