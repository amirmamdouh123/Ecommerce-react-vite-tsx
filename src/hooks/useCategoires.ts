import GridList from "@components/common/GridList/GridList";
import Loading from "@components/common/feedback/Loading";
import { Category } from "@components/index";
import getCategories from "@store/categories/AsyncAction/getCategoies";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { TCateogry } from "src/types/TCategory";


function useCategories(){
    
    const dispatch =useAppDispatch()
    const categories =useAppSelector((state)=>state.category)
    
    useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])
    const LoadingProps= {error:categories.error , status: categories.status}

    return {LoadingProps,categories}
    
}
export default useCategories