import GridList from "@components/common/GridList/GridList";
import Loading from "@components/common/feedback/Loading";
import { Category } from "@components/index";
import useCategories from "@hooks/useCategoires";

import { Col, Row } from "react-bootstrap";
import { TCateogry } from "src/types/TCategory";

function Categories(){
    const {LoadingProps,categories}=useCategories()

    return (<div>
        <h1>Categories</h1>
        <Loading {...LoadingProps}>
            <Row>
                <GridList<TCateogry> 
                items={categories.items} 
                renderLoop={(item)=> <Col xs={3}> <Category {...item} /> </Col> } 
                />
            </Row>
        </Loading>
        </div>
    )
}

export default Categories;