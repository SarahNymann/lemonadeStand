import { configureStore } from '@reduxjs/toolkit';

import profitReducer from "./profitSlice"; // Importer profit reduceren
import cartReducer from "./cartSlice"; // Importer reducerenn der styre cart


export const store = configureStore({
    reducer: {
        profit: profitReducer, // Tilføj profit reduceren til store
        cart: cartReducer, // State til produkter i kurven
    },
});