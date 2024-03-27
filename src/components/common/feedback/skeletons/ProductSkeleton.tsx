import { Col, Row } from "react-bootstrap"
import ContentLoader from "react-content-loader"

const fourProductSkeleton = Array(4).map(el=>{
    return ( <Col> <ContentLoader 
        speed={2}
        width={200}
        height={180}
        viewBox="0 0 200 180"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="42" y="142" rx="0" ry="0" width="79" height="12" /> 
        <rect x="32" y="14" rx="0" ry="0" width="104" height="114" />
      </ContentLoader> </Col>)
})


const ProductSkeleton = () => {
    return (
        <Row>
{fourProductSkeleton}
        </Row>
    )
}

export default ProductSkeleton
