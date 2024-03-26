import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCateogry, TResponseCategories } from "src/types/TCategory";
import isAxiosErrorHandler from "src/utils/isAxiosErrorHandler";

 const getCategories =createAsyncThunk(
    'category/getCategories',
        async (_,AsycThunk)=>{
            const {rejectWithValue , signal}=AsycThunk
            try{
            const categories= await axios.get<TCateogry[]>(`http://localhost:9090/categories`,{ signal })
            const data = categories.data;
            return data
            }catch(error){
               return rejectWithValue(isAxiosErrorHandler(error))
            }
        })

export default getCategories;