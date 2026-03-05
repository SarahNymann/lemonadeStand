import { createSlice } from "@reduxjs/toolkit";

const profitSlice = createSlice({
    name: "profit",                 // Navnet på denne del af state
    initialState: {                 // Startværdien for profit er 0
        value: 0,
    },
    reducers: {                     //Reducer er funktionen der ændre staten
        sellLemonade: (state) => {
            state.value += 5;       // Hver gang vi sælger lemonade, øges profit med $5
        },
        buyLemons: (state) => {
            state.value -=2;        // Hver gang vi køber lemons, reduceres profit med $2
        },
    },  
});


export const { sellLemonade, buyLemons } = profitSlice.actions; // Eksporterer actions for at kunne bruge dem i komponenter

export default profitSlice.reducer; // Eksporterer reduceren for at kunne bruge den i store