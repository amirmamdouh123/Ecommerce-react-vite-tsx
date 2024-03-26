import GridList from "@components/common/GridList/GridList"
import Loading from "@components/common/feedback/Loading"
import { Product } from "@components/index"
import useWishItems from "@hooks/useWishlist"
import { Col, Row } from "react-bootstrap"
import { TProduct } from "@types"

function wishItems(){

    const {wishlist,cartQuantityItems,wishItemsList}=useWishItems()
    
    
    return (<div>
        <Loading status={wishlist.status} error={wishlist.error} >
            <Row>
                <GridList<TProduct> items={wishItemsList} renderLoop={(item)=> <Col xs={3} > <Product {...item} quantity={cartQuantityItems.items[item.id]} isLiked={true} />   </Col>  }/>
            </Row>
        </Loading>
        </div>)
}

export default wishItems