import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@types";
import isAxiosErrorHandler from "src/utils/isAxiosErrorHandler";
import { Header } from "@components/common";

 const getProducts =createAsyncThunk(
    'products/getProducts',
        async (prefix:string,AsycThunk)=>{
            const {rejectWithValue , signal}=AsycThunk
            try{   
                const products= await axios.get<TProduct[]>(
                    `http://localhost:9090/products?cat_prefix=${prefix}`,
                { signal })
                const data = products.data;
                
                return data
            }catch(error){
              return  rejectWithValue(isAxiosErrorHandler(error))
        }
    });

export default getProducts;