import ContentLoader from "react-content-loader"
import { Col, Row } from "react-bootstrap"


const fourCategorySkeletons = Array(4).fill(0).map((_,indx)=>{
  return (<Col xs={3} key={indx}> 
  <ContentLoader 
    speed={2}
    width={200}
    height={200}
    viewBox="0 0 180 180"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="78" cy="66" r="60" /> 
    <rect x="33" y="135" rx="0" ry="0" width="86" height="13" />
  </ContentLoader>
  </Col>)
})

const categorySkeleton = () => {
  return (
    <Row>
        {fourCategorySkeletons}
    </Row>
  )
  }

export default categorySkeleton