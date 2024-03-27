import { createSlice } from "@reduxjs/toolkit/react";
import getCategories from "./AsyncAction/getCategoies";
import { TResponseCategories } from "src/types/TCategory";
import { isString } from "src/types/guards";

interface IAction{
    type:string,
    payload: any | null
}


const initialState :TResponseCategories={
    items:[],
    status: 'idle',
    error:null
}


const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{
        addProduct:(state,action :IAction)=>{
            state.items.push(action.payload)
        },
    },extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state,action)=>{
            state.error=null;
            state.status='pending'
        }),
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            if(action.payload!=undefined &&action.payload.length>0 ){
                state.items= action.payload
                state.status='succeed'
            }
            else{
                state.status='idle'
            }
        }),
        builder.addCase(getCategories.rejected,(state,action)=>{
            if(isString(action.payload)){
                state.error= action.payload 
            }
            state.status='failed'
        })

    }

})



export default categoriesSlice.reducer;
export const { addProduct } = categoriesSlice.actions;