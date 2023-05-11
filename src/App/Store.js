import {configureStore} from "@reduxjs/toolkit";
import CartSlice from "./cartSlice.js";


const Store = configureStore({
    reducer: {
        cart: CartSlice
        ,
    },
})

export default Store;