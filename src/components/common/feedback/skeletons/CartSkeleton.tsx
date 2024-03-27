import React from "react"
import { Col, Row } from "react-bootstrap"
import ContentLoader from "react-content-loader"



const fourCategorySkeletons = Array(4).fill(0).map((_,idx)=>{
   return (  <ContentLoader  key={idx}
    speed={2}
    width={1180}
    height={200}
    viewBox="0 0 1180 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="191" y="6" rx="5" ry="5" width="1000" height="24" /> 
    <rect x="-4" y="-12" rx="0" ry="0" width="180" height="180" /> 
    <rect x="0" y="192" rx="0" ry="0" width="1180" height="3" />
  </ContentLoader>
   )
})

const CartSkeleton = () => {
    return (<Row>

{fourCategorySkeletons}
    </Row>)
}

export default CartSkeleton