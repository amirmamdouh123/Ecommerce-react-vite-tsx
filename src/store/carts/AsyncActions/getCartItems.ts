import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@types";
import isAxiosErrorHandler from "src/utils/isAxiosErrorHandler";

const getCartItems=createAsyncThunk(
    'cart/getCartItems',
    async (items : {[id:number]:number} , AsyncAPI)=>{
        const {rejectWithValue}=AsyncAPI
        try{
            const productIds =Object.keys(items).map((productId)=>{
                return `id=${productId}`
            }).join('&');
            if(productIds.length===0){
                return []
            }
            // get these products
            const respone = await axios.get<TProduct[]>(`http://localhost:9090/products?${productIds}`)
            return respone.data       
        }
        catch(error){
            if(axios.isAxiosError(error)){
                rejectWithValue(isAxiosErrorHandler(error))
        }
    }
}

)
export default getCartItems;