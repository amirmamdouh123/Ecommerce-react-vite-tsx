import getCategories from "@store/categories/AsyncAction/getCategoies";
import { useAppDispatch, useAppSelector } from "@store/index";
import { useEffect } from "react";


function useCategories(){
    
    const dispatch =useAppDispatch()
    const categories =useAppSelector((state)=>state.category)
    
    useEffect(()=>{
       const promise= dispatch(getCategories())
   
       return ()=>{
        promise.abort() 
       }
    },[dispatch])
    const LoadingProps= {error:categories.error , status: categories.status}

    return {LoadingProps,categories}
    
}
export default useCategories