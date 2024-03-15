import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { IcategoriesState } from 'src/types/TResponseCategory'
type TResponseBody = IcategoriesState  //response of the API is IcategoriesState

const getCategories= createAsyncThunk('categories/getAll' ,async (_,ApiThunk)=>{
    //dispatch(categories/getAll/pending  ,undefined)    
    const { rejectWithValue } = ApiThunk;
    try{
    const response=await axios.get<TResponseBody>('http://localhost:9090/categories')
    return response
    //dispatch(categories/getAll/fulfilled  ,data)    
    }
    catch(error){
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message || error.message);
        //dispatch(categories/getAll/error  ,error)    
        }
        else{
          return  rejectWithValue('An unexpected error.');
        }
    }
})

export default getCategories;


