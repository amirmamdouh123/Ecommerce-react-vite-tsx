import Product from "@components/Ecommerce/Product/Product";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import getProducts from "@store/products/AsyncAction/getProducts"
import { Container } from "react-bootstrap";
import { productsCleanUp } from "@store/products/productsSlice";
import {Loading} from "@components/feedback";
import GridList from "@components/common/GridList/GridList";
import { IOneProduct } from "src/types/TResponseProduct";
function Products(){

    const dispatch = useAppDispatch()
    const productState = useAppSelector((state)=> state.product)
    
    const {prefix} = useParams()

    useEffect(()=>{
        // const reultDispatch =
        dispatch(getProducts(prefix as string))
        // reultDispatch.unwrap().then((d)=>console.log(d));
        
        return () => { dispatch(productsCleanUp())
        }
    },[dispatch,prefix])

// console.log(productState);


    // const productsTSX = productState.records?.map((product)=>{
    //     return ( <Col xs={3} key={product.id} className="d-flex justify-content-center mb-5 mt-2 " >
    //             <Product  {...product} />
    //         </Col>)
    //     }) 

    const renderElement = useCallback((product:IOneProduct)=>
    {return (<Product  {...product} />)},[])
  
    return(
        <Container>
            <Loading error={productState.error} status={productState.loading}>

            <GridList records={productState.records} renderElement={renderElement} />

            </Loading>
        </Container>
    )
}

export default Products;