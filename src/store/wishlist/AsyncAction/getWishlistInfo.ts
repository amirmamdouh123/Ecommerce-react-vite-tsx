import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@types";
import { TWishlist } from "src/types/TWishlist";
import isAxiosErrorHandler from "src/utils/isAxiosErrorHandler";

const getWishlist=createAsyncThunk(
    'cart/getWishlist',
    async (items : TWishlist[] , AsyncAPI)=>{
        const {rejectWithValue ,signal} =AsyncAPI
        try{
            const productIds =items.map((wishItem)=>{
                const wishItemId =wishItem.itemId;
                return `id=${wishItemId}`
            }).join('&');
            if(productIds.length===0){
                return []
            }
            // get these products
            const respone = await axios.get<TProduct[]>(`http://localhost:9090/products?${productIds}` ,{signal})
            return respone.data      
        }
        catch(error){
           return rejectWithValue(isAxiosErrorHandler(error))
        }
    }

)
export default getWishlist;