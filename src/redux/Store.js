import { CartSlice } from "./Slices/CartSlice";
import { configureStore } from "@reduxjs/toolkit";


export const Store = configureStore (
    {
        reducer:{
            cart : CartSlice.reducer
        }
    }
)

