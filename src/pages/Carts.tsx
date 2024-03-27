import CartSubtotalPrice from "@components/Ecommerce/CartSubtotalPrice/CartSubtotalPrice";
import GridList from "@components/common/GridList/GridList";
import Loading from "@components/common/feedback/Loading";
import { CartItem } from "@components/index";

import { TProduct } from "@types";
import useCarts from "@hooks/useCarts";
import ProductSkeleton from '@components/common/feedback/skeletons/ProductSkeleton'
function Carts(){
    const {cart,LoadingProps,cartItemsList} =useCarts()

    return (
        <div>
            <Loading {...LoadingProps }  type='cart'>
                <GridList<TProduct> 
                items={cartItemsList} renderLoop={(item)=> <CartItem {...item } quantity={cart.items[item.id]} />}  />
                <CartSubtotalPrice />
            </Loading>
        </div>
    )
}
export default Carts;


