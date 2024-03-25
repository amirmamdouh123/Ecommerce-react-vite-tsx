import { useAppDispatch, useAppSelector } from "@store/hooks";
import getProducts from "@store/products/AsyncAction/getProducts";
import { clearProducts } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function useProducts(){

    console.log('products run');

    const {prefix} =useParams()
    const dispatch =useAppDispatch()
    const products =useAppSelector((state)=>state.product)
    const carts =useAppSelector((state)=>state.cart)
    const wishlist =useAppSelector((state)=>state.wishlist)
    
    const productsWithQuantityAndLiked = products.items.map((item)=>{
        const quantity = carts.items[item.id]
        
        return ({...item ,
            quantity: quantity??0 ,   //cartList 
            isLiked:wishlist.wishItems.reduce((accumlat , current)=>{   //wishList
                    return accumlat || current.itemId == item.id
        },false)
    })})

    useEffect(()=>{
        dispatch(getProducts(prefix as string))

        return () =>{
            dispatch(clearProducts(0))
        }
    },[]);


    const LoadingProps= {error:products.error , status: products.status}
   
    return ({prefix,LoadingProps,productsWithQuantityAndLiked})
}

export default useProducts