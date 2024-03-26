import { createSlice } from "@reduxjs/toolkit";
import {TWishlist} from 'src/types/TWishlist'
import IsLikeOrDis from '@store/wishlist/AsyncAction/LikeOrDisLike'
import { TProduct ,isString } from "@types";
import getWishlist from "./AsyncAction/getWishlistInfo";
import { TStatus } from "src/types/sharedTypes";

type TinitialState={
    wishItems:TWishlist[],
    productFullInfo: {[id:number]:TProduct},
    error: string | null,
    status:TStatus
}
const initialState : TinitialState = {
    wishItems:[],
    productFullInfo:{},
    error:null,
    status:'idle'
}

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        clearWishlistInfo:(state)=>{
            state.productFullInfo=[]
        }
    },extraReducers:(builder)=>{
        
        builder.addCase(IsLikeOrDis.pending,(state,action)=>{
            state.error=null;
        }),
        
        builder.addCase(IsLikeOrDis.fulfilled,(state,action)=>{ //payload : { type : string , itemDate : TProduct}
            const itemData = action.payload.itemData;
            const itemId = itemData.id;
            if(action.payload.type=='add'){
                state.wishItems.push({itemId:itemId , userId:1 })
            }
            else if (action.payload.type=='delete'){
                state.wishItems= state.wishItems.filter(el => el.itemId != itemId)
            }
            return state
        }),

        builder.addCase(IsLikeOrDis.rejected,(state,action)=>{
            if(typeof action.payload ==='string'){
                state.error=action.payload;
            }
            return state
        }),
        builder.addCase(getWishlist.pending,(state,action)=>{
            state.error=null;
            state.status='pending'
        })
        builder.addCase(getWishlist.fulfilled,(state,action)=>{
            if(action.payload !=undefined && action.payload.length>0){
                state.productFullInfo=action.payload
                state.status='succeed'
            }
            else{
                state.status='idle'

            }
        }),
        builder.addCase(getWishlist.rejected,(state,action)=>{
            if(isString(action.payload)){
                state.error=action.payload;
            }
            state.status='failed'
        })
        
    }})

export default wishlistSlice.reducer;
export const {clearWishlistInfo } = wishlistSlice.actions;