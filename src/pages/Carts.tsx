import CartSubtotalPrice from "@components/Ecommerce/CartSubtotalPrice/CartSubtotalPrice";
import GridList from "@components/common/GridList/GridList";
import Loading from "@components/common/feedback/Loading";
import { CartItem } from "@components/index";

import { TProduct } from "src/types/TProduct";
import useCarts from "@hooks/useCarts";
function Carts(){
    const {cart,LoadingProps,cartItemsList} =useCarts()

    return (
        <div>
            <Loading {...LoadingProps}>
                <GridList<TProduct> 
                items={cartItemsList} renderLoop={(item)=> <CartItem {...item } quantity={cart.items[item.id]} />}  />
            </Loading>
            <CartSubtotalPrice />
        </div>
    )
}
export default Carts;


