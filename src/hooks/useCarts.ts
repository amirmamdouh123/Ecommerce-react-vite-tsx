import {  useAppDispatch, useAppSelector } from "@store/index";
import {cleanproductFullInfo} from "src/store/carts/cartsSlice"
import { useEffect } from "react";
import {getCartItems} from "@store/index";

function useCarts(){

    const dispatch =useAppDispatch()
    const cart =useAppSelector(state=>state.cart)



    useEffect( ()=>{
        dispatch(getCartItems(cart.items))
        return ()=>{dispatch(cleanproductFullInfo())}
    },[dispatch ,cart.items])

    const LoadingProps= {error:null , status:cart.status }
    const cartItemsList = Object.values(cart.productFullInfo)  //convert dictionary of items to list

    return ({cart,LoadingProps ,cartItemsList})
}

export default useCarts