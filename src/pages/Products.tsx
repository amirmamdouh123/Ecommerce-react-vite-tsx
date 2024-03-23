import GridList from "@components/common/GridList/GridList";
import Loading from "@components/common/feedback/Loading";
import { Product } from "@components/index";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import getProducts from "@store/products/AsyncAction/getProducts";
import { clearProducts } from "@store/products/productsSlice";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { TProduct } from "src/types/TProduct";

function Products(){
    console.log('products run');

    const {prefix} =useParams()
    const dispatch =useAppDispatch()
    const products =useAppSelector((state)=>state.product)
    const carts =useAppSelector((state)=>state.cart)
    
    const productsWithQuantity = products.items.map((item)=>{
        const quantity = carts.items[item.id]
        
        return {...item ,quantity: quantity??0 }
    })

    useEffect(()=>{
        dispatch(getProducts(prefix as string))

        return () =>{
            dispatch(clearProducts(0))
        }
    },[])

    const renderProduct = (item :TProduct)=>{
        return (<Col xs={3} key={item.id} className="d-flex justify-content-center mb-5 mt-2 ">
                    <Product {...item} />
                </Col>)
    }
    const LoadingProps= {error:products.error , status: products.status}
    return (<div>
        <h1>Products</h1>
            <Loading {...LoadingProps}>
                <Row>
                    <GridList<TProduct> items={productsWithQuantity} renderLoop={renderProduct} />
                </Row>
            </Loading>
        </div>
    )
}
export default Products;