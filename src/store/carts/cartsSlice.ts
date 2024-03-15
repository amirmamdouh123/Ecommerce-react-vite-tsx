import { createSlice } from "@reduxjs/toolkit";
import { IOneProduct } from "src/types/TResponseProduct";

type TInitialState={
    items: {[key:number]:number},
    productFullInfo: IOneProduct[]
}

const initialState :TInitialState ={
    items: {},          // items =[{id:quantity}]
    productFullInfo:[]             
}
const cart =createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{}
})

export default cart;