import { createSlice } from "@reduxjs/toolkit/react";
import getProducts from "./AsyncAction/getProducts";
import { IProductState} from "src/types/TResponseProduct";

const initialState :IProductState= {
    records:[],
    loading:'idle',
    error : null
} 
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state: IProductState,action )=>{
            state.records.push(action.payload)
        },
        productsCleanUp:(state: IProductState)=>{
            state.records=[]
        }
    }
    ,extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(productState,_)=>{
                productState.error=null;
                productState.loading="pending";
        })
        ,
        builder.addCase(getProducts.fulfilled,(productState :IProductState, action )=>{
            productState.loading="succeed";
            if(Array.isArray(action.payload))
                productState.records = action.payload 
    }),
    builder.addCase(getProducts.rejected,(productState :IProductState,action )=>{
        productState.loading="failed";
        if(typeof action.payload ==="string"){
            productState.error = action.payload
        }
})
    }
})

export default productSlice.reducer;
export const { addProduct ,productsCleanUp} = productSlice.actions;