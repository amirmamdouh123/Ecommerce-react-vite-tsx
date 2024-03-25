import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "src/types/TProduct";
import { TWishlist } from "src/types/TWishlist";

const getWishlist=createAsyncThunk(
    'cart/getWishlist',
    async (items : TWishlist[] , AsyncAPI)=>{
        const {rejectWithValue} =AsyncAPI
        try{
            const productIds =items.map((wishItem)=>{
                const wishItemId =wishItem.itemId;
                return `id=${wishItemId}`
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
                return rejectWithValue(error.response?.data.message ||error.message)
            }
            else{
                return rejectWithValue('unexpected error')
            }
        }
    }

)
export default getWishlist;