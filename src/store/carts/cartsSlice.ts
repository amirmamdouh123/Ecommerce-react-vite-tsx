import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootstateType } from "@store/Store";
import { IOneProduct } from "src/types/TResponseProduct";

export type TInitialState={
    items: {[key:number]:number},
    productFullInfo: IOneProduct[],
}

const initialState :TInitialState ={
    items: {},          // items =[{id:quantity}]
    productFullInfo:[],
}
const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart:(state,action)=>{  //action.payload = id
            if(state.items[action.payload.id]){
                state.items[action.payload.id]++
            }else{
                state.items[action.payload.id]=1
            }

        },
        decrementFromCart:(state,action)=>{  //action.payload = id
            if(state.items[action.payload.id]>1){
                state.items[action.payload.id]--
            }else{
                delete state.items[action.payload.id]
            }

        }
    }
})



export const {addToCart , decrementFromCart} = cartSlice.actions;
export default cartSlice.reducer;