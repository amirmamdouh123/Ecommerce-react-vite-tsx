import GridList from "@components/common/GridList/GridList";
import Loading from "@components/common/feedback/Loading";
import { Category } from "@components/index";
import getCategories from "@store/categories/AsyncAction/getCategoies";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { TCateogry } from "src/types/TCategory";

function Categories(){
    
    const dispatch =useAppDispatch()
    const categories =useAppSelector((state)=>state.category)
    console.log('categories run');
    
    useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])

    const renderCategory = (item :TCateogry)=>{
        return (<Col xs={3} key={item.id} className="d-flex justify-content-center mb-5 mt-2 ">
                    <Category {...item} />
                </Col>)
    }

    const LoadingProps= {error:categories.error , status: categories.status}
    return (<div>
        <h1>Categories</h1>
        <Loading {...LoadingProps}>
            <Row>
                <GridList<TCateogry> items={categories.items} renderLoop={renderCategory} />
            </Row>
        </Loading>
        </div>
    )
}
export default Categories;