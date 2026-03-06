import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],                                                  //Kurven starter tom
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(                  // Tjekker om drinken allerede ligger i kurven
                (item) => item.idDrink === action.payload.idDrink
            );

            if (existingItem) {                                     // Hvis den gør, øges antallet med 1
                existingItem.quantity +=1;
            } else {                                                // Hvis den ikke gør, ligges drinken i kurven
                state.items.push({
                    ...action.payload,                              // kopierer alle data fra drinken (navn, billede osv.)
                    quantity: 1,                                    // Starter med 1 stk. i kurven
                });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(                       // filter laver en ny liste hvor vi fjerner det item der matcher id'et vi får i action.payload
                (item) => item.idDrink !== action.payload
            );
        },

        increaseQuantity: (state, action) => {                      // Denne reducer bruges hvis brugeren vil tilføje flere af samme drink direkte fra cart-siden
            const item = state.items.find(                          // Finder det produkt i kurven der matcher id'et
                (item) => item.idDrink === action.payload
            );

            if(item) {                                               // Hvis vi finder produktet, øger vi antallet
                item.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const item = state.items.find(
                (item) => item.idDrink  === action.payload
            );

            if(item) {                                               // Hvis vi finder produktet, mindsker vi antallet
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(                       
                        (item) => item.idDrink !== action.payload
                    );
                }
            }
        }
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions; // Her eksporterer vi reduceren så den kan tilføjes til Redux store

export default cartSlice.reducer;   // Her eksporterer vi reduceren så den kan tilføjes til Redux store