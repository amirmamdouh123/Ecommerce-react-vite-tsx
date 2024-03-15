import Category from "@components/Ecommerce/Category/Category";
import { useCallback, useEffect } from "react";
import { Col,Row, Container } from "react-bootstrap";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import getCategories from "@store/categories/AsyncAction/actGetCategories";
import {Loading} from "@components/feedback";
import GridList from "@components/common/GridList/GridList";
import { IOneCategory } from "src/types/TResponseCategory";


function Categories(){

    const dispatch =useAppDispatch()
    const {records ,error ,loading} =useAppSelector((state)=>state.category)
    useEffect(()=>{
        dispatch(getCategories())
    },[])

    // const CategoriesTSX= records.map((category)=>{
    //     return ( <Col xs={3} key={category.id} className="d-flex justify-content-center mb-5 mt-2 " >
    //     <Category  {...category} />
    //     </Col>)
    // })

    const renderElement = useCallback((record : IOneCategory)=>{
        return <Category {...record}/>
    },[])

    return(
        <Container>
            <Loading error={error} status={loading} >
                <GridList<IOneCategory> records={records} renderElement={renderElement}/>
                {/* <Row>
                    {CategoriesTSX}
                </Row> */}
            </Loading>
        </Container>
    )
}

export default Categories;