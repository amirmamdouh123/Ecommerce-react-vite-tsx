import { createSlice } from "@reduxjs/toolkit/react";
import getCategories from "./AsyncAction/actGetCategories";
import { IcategoriesState } from "src/types/TResponseCategory";

interface IAction{
    type:string,
    payload: any | null
}


const initialState :IcategoriesState={
    records:[],
    loading: 'idle',
    error:null
}


const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{
        addProduct:(state: IcategoriesState,action :IAction)=>{
            state.records.push(action.payload)
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending, (state :IcategoriesState)=>{
            state.loading= "pending"
            state.error=null;         //if there was error before remove it
        })

        builder.addCase(getCategories.fulfilled, (state:IcategoriesState,action :IAction)=>{
            state.records = action.payload.data
            state.loading= "succeed"
        })

        builder.addCase(getCategories.rejected, (state:IcategoriesState,action :IAction)=>{
            state.loading= "failed"
            if(typeof action.payload==='string')
                state.error = action.payload 
        })

    }
})

export default categoriesSlice.reducer;
export const { addProduct } = categoriesSlice.actions;