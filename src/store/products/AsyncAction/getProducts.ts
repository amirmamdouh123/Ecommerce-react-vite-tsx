import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProductState } from "src/types/TResponseProduct";



const getProducts = createAsyncThunk('products/getProducts',async (category: string,ApiThunk)=>{
    const {rejectWithValue} =ApiThunk
    try{
    const response = await axios.get<IProductState>(`http://localhost:9090/${category}`)
    const data= response.data;
    return data;     //payload
    }
    catch(error){
        if(axios.isAxiosError(error)){
        return rejectWithValue(error.response?.data.message || error.message)
        }
        else
        return rejectWithValue("unexpected Error")
    }
})

export default getProducts;