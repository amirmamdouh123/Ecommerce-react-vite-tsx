import { createSlice } from "@reduxjs/toolkit/react";
import getCategories from "./AsyncAction/getCategoies";
import { TCateogry ,TResponseCategories } from "src/types/TCategory";

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
            if(action.payload!=undefined){
                state.items= action.payload
            }
            state.status='succeed'
        }),
        builder.addCase(getCategories.rejected,(state,action)=>{
            if(action.payload!=null){
                state.error= action.payload as string
            }
            state.status='failed'
        })

    }

})

export default categoriesSlice.reducer;
export const { addProduct } = categoriesSlice.actions;