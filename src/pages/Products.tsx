import GridList from "@components/common/GridList/GridList";
import Heading from "@components/common/Heading/Heading";
import Loading from "@components/common/feedback/Loading";
import { Product } from "@components/index";
import { Col, Row } from "react-bootstrap";
import { TProduct } from "@types";
import useProducts from 'src/hooks/useProducts'


function Products(){
    const {prefix,LoadingProps,productsWithQuantityAndLiked}= useProducts()

    return (<div>
        <Heading>{prefix + " Products"}</Heading>
            <Loading {...LoadingProps} type='product'>
                <Row>
                 <GridList<TProduct> items={productsWithQuantityAndLiked} renderLoop={(item)=><Col xs={3}> <Product {...item}/> </Col>} />
                </Row>
            </Loading>
        </div>
    )
}
export default Products;