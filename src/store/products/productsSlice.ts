import { createSlice } from "@reduxjs/toolkit/react";
import getProducts from "./AsyncAction/getProducts";
import { TResponseProducts } from "src/types/TProduct";
import { isString } from "src/types/guards";

const initialState :TResponseProducts= {
    items:[],
    error:null,
    status:'idle'
}
const productSlice = createSlice({
    name:'product',
    initialState:initialState,
    reducers:{
        clearProducts:(state,_)=>{
            state.items=[]
        }
    },extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state,_)=>{
            state.error=null;
            state.status='pending'
        }),
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            if(action.payload!=undefined &&action.payload.length>0 ){
                state.items= action.payload
                state.status='succeed'
            }
            else{
                state.status='idle'
            }
        }),
        builder.addCase(getProducts.rejected,(state,action)=>{
            if(isString(action.payload)){
                state.error= action.payload
            }
            state.status='failed'
            throw new Response('Bad Requset',{status:404 ,statusText:state.error as string})
        })
    }
})

export default productSlice.reducer
export const {clearProducts} =productSlice.actions