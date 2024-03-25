import CartSubtotalPrice from "@components/Ecommerce/CartSubtotalPrice/CartSubtotalPrice";
import GridList from "@components/common/GridList/GridList";
import Loading from "@components/common/feedback/Loading";
import { CartItem } from "@components/index";
import {  useAppDispatch, useAppSelector } from "@store/hooks";

import { TProduct } from "src/types/TProduct";
import { TStatus } from "src/types/sharedTypes";
import {cleanproductFullInfo} from "src/store/carts/cartsSlice"
import { useEffect } from "react";
import getCartItems from "@store/carts/AsyncActions/getCartItems";

function useCarts(){

    const dispatch =useAppDispatch()
    const cart =useAppSelector(state=>state.cart)



    useEffect( ()=>{
        dispatch(getCartItems(cart.items))
        return ()=>{dispatch(cleanproductFullInfo())}
    },[dispatch])

    const LoadingProps= {error:null , status:cart.status }
    const cartItemsList = Object.values(cart.productFullInfo)  //convert dictionary of items to list

    return ({cart,LoadingProps ,cartItemsList})
}

export default useCarts