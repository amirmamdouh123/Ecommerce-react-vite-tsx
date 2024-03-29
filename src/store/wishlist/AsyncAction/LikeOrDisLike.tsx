import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "@types";
import { TWishlist  } from "src/types/TWishlist";
import isAxiosErrorHandler from "src/utils/isAxiosErrorHandler";

const IsLikeOrDis =createAsyncThunk('wishlist/getItem',
        async (itemData : TProduct ,ApiThunck)=>{
           const {rejectWithValue}=ApiThunck
            try{                
                //API returns a list    -> may be empty or not
            const isExsit  =await axios.get<TWishlist[]>(`http://localhost:9090/wishlist?userId=1&itemId=${itemData.id}`) 
            console.log(isExsit.data.length);
            
            if(isExsit.data.length > 0){  //found -> dislike -> delete from db
                await axios.delete(`http://localhost:9090/wishlist/${isExsit.data[0].id}`) //id of item that automatically generated by db
                return {type:'delete' , itemData}
            }
            else{                                                            //body
                await axios.post(`http://localhost:9090/wishlist`,{itemId:itemData.id , userId:1});
                return {type:'add', itemData:itemData}
            }
        }catch(error){
          return  rejectWithValue( isAxiosErrorHandler(error)   )
    }
})

export default IsLikeOrDis;