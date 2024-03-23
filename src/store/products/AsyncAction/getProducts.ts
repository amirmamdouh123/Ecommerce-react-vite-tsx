import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "src/types/TProduct";

 const getProducts =createAsyncThunk(
    'products/getProducts',
        async (prefix:string,AsycThunk)=>{
            const {rejectWithValue}=AsycThunk
            try{
                console.log(`http://localhost:9090/${prefix}`);
                
            const products= await axios.get<TProduct[]>(`http://localhost:9090/${prefix}`)
            const data = products.data;
            return data
            }catch(error){
                if(axios.isAxiosError(error))
                   return rejectWithValue(error.response?.data.message || error.message)
                else
                   return rejectWithValue("unexpected Error..")
            }
        })

export default getProducts;