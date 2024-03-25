import GridList from "@components/common/GridList/GridList"
import Loading from "@components/common/feedback/Loading"
import { Product } from "@components/index"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import getWishlist from "@store/wishlist/AsyncAction/getWishlistInfo"
import { clearWishlistInfo } from "@store/wishlist/wishlist"
import { useCallback, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { TProduct } from "src/types/TProduct"

function useWishItems(){
    const dispatch =useAppDispatch()

    const wishlist =useAppSelector((state)=>state.wishlist)
    const cartQuantityItems =useAppSelector((state)=>state.cart)

    useEffect(()=>{
        dispatch(getWishlist(wishlist.wishItems))
        return()=>{
            dispatch(clearWishlistInfo())
        }
    },[dispatch,wishlist.wishItems])


    const wishItemsList = Object.values(wishlist.productFullInfo) 
    return ({wishlist,cartQuantityItems,wishItemsList})
}

export default useWishItems