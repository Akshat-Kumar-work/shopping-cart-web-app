import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        //passing current state and action in parameter
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter ( (item) => item.id !== action.payload)
        },
    }
})

export const {add , remove} = CartSlice.actions;

export default CartSlice.reducer;