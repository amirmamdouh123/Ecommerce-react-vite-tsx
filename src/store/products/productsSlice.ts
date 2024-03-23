import { createSlice } from "@reduxjs/toolkit/react";
import getProducts from "./AsyncAction/getProducts";
import { TResponseProducts ,TProduct} from "src/types/TProduct";

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
            if(action.payload!=undefined){
                state.items= action.payload
            }
            state.status='succeed'
        }),
        builder.addCase(getProducts.rejected,(state,action)=>{
            if(action.payload!=null){
                state.error= action.payload as string
            }
            state.status='failed'
        })
    }
})

export default productSlice.reducer
export const {clearProducts} =productSlice.actions