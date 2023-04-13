import { CartSlice } from "./Slices/cartSlice";

const Store = configureStore (
    {
        reducer:{
            cart : CartSlice,
        }
    }
)