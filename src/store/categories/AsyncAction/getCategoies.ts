import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCateogry, TResponseCategories } from "src/types/TCategory";

 const getCategories =createAsyncThunk(
    'category/getCategories',
        async (_,AsycThunk)=>{
            const {rejectWithValue}=AsycThunk
            try{
            const categories= await axios.get<TCateogry[]>(`http://localhost:9090/categories`)
            const data = categories.data;
            return data
            }catch(error){
                if(axios.isAxiosError(error))
                    return rejectWithValue(error.response?.data.message || error.message)
                else
                    return rejectWithValue("unexpected Error..")
            }
        })

export default getCategories;