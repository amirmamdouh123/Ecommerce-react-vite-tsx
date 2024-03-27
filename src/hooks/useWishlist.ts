import { useAppDispatch, useAppSelector } from "@store/index"
import getWishlist from "@store/wishlist/AsyncAction/getWishlistInfo"
import { clearWishlistInfo } from "@store/wishlist/wishlist"
import {  useEffect } from "react"

function useWishItems(){
    const dispatch =useAppDispatch()

    const wishlist =useAppSelector((state)=>state.wishlist)
    const cartQuantityItems =useAppSelector((state)=>state.cart)

    useEffect(()=>{
        const promise =dispatch(getWishlist(wishlist.wishItems))
        return()=>{
            promise.abort()
            dispatch(clearWishlistInfo())
        }
    },[dispatch,wishlist.wishItems])


    const wishItemsList = Object.values(wishlist.productFullInfo) 
    return ({wishlist,cartQuantityItems,wishItemsList})
}

export default useWishItems