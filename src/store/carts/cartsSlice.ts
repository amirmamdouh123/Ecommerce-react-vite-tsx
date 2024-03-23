import {  createSlice } from "@reduxjs/toolkit";
import { TResponseCarts } from "src/types/TCart";
import { TProduct } from "src/types/TProduct";

const initialState :TResponseCarts ={
    items: {},          // items =[{id:quantity}]
    productFullInfo:{},
    status:'idle'
}
const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart: (state :TResponseCarts , action :{type:string ,payload:TProduct})=>{  //action.payload = productItem   
            const productId = action.payload.id;    
            const previousQuantity= state.items[productId] ?? 0;
            state.items[productId] = previousQuantity+1
            state.productFullInfo[productId]={...action.payload , quantity: previousQuantity+1}
        },
        quantityChange:(state,action)=>{  //payload -> {id , newQuantity}
            const productId = action.payload.id;    
            const newQuantity = action.payload.newQuantity;
            state.items[productId] = newQuantity;
            state.productFullInfo[productId] = {...state.productFullInfo[productId]  , quantity: newQuantity }
        },
        deleteFromCart:(state,action)=>{  //payload -> id
            const productId =action.payload;
            delete state.items[productId]
            delete state.productFullInfo[productId]
        }
    }
})

export const {addToCart , quantityChange ,deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;