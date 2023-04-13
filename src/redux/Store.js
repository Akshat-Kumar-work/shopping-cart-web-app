import { CartSlice } from "./Slices/cartSlice";

export const Store = configureStore (
    {
        reducer:{
            cart : CartSlice,
        }
    }
)

