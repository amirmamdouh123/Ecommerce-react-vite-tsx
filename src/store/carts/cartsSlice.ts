import {  createSlice } from "@reduxjs/toolkit";
import { TResponseCarts } from "src/types/TCart";
import { TProduct } from "@types";
import getCartItems from "./AsyncActions/getCartItems";
import { isString } from "src/types/guards";

const initialState :TResponseCarts ={
    items: {},          // items =[{id:quantity}]
    productFullInfo:[],
    status:'idle',
    error:null
}
const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart: (state :TResponseCarts , action :{type:string ,payload:TProduct})=>{  //action.payload = productItem   
            const productId = action.payload.id;    
            const previousQuantity= state.items[productId]??0; //first time to add cart -> it's not exists inside the cartList
            state.items[productId] = previousQuantity+1
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
            state.productFullInfo=state.productFullInfo.filter((el)=> el.id !==productId)
        },
        cleanproductFullInfo:(state)=>{
            state.productFullInfo=[]
        },
    },extraReducers:(builder)=>{
        builder.addCase(getCartItems.pending,(state,action)=>{
            state.error=null;
            state.status='pending'
        })
        builder.addCase(getCartItems.fulfilled,(state,action)=>{
            if(action.payload !=undefined && action.payload.length>0){
                state.productFullInfo=action.payload
                state.status='succeed'
            }
            else{
                state.status='idle'

            }

        }),
        builder.addCase(getCartItems.rejected,(state,action)=>{
            if(isString(action.payload)){
                state.error=action.payload;
            }
            state.status='failed'
        })
    }
})

export const {addToCart , quantityChange ,deleteFromCart ,cleanproductFullInfo} = cartSlice.actions;
export default cartSlice.reducer;