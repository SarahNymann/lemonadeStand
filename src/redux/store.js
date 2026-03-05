import { configureStore } from '@reduxjs/toolkit';

import profitReducer from "./profitSlice"; // Importer profit reduceren


export const store = configureStore({
    reducer: {
        profit: proditReducer, // Tilføj profit reduceren til store
    },
});