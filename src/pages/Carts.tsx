import CartSubtotalPrice from "@components/Ecommerce/CartSubtotalPrice/CartSubtotalPrice";
import GridList from "@components/common/GridList/GridList";
import Loading from "@components/common/feedback/Loading";
import { CartItem } from "@components/index";
import {  useAppSelector } from "@store/hooks";

import { TProduct } from "src/types/TProduct";
import { TStatus } from "src/types/sharedTypes";

function Carts(){
    console.log("Carts page run");
    
    const cart =useAppSelector(state=>state.cart)
    const renderCarts=(cart:TProduct)=>{
        return( <div key={cart.id}>
                <CartItem  {...cart} /> 
            </div> )
    }

    const cartStatus :TStatus = Object.keys(cart.productFullInfo).length? 'succeed'  : 'idle';
    const LoadingProps= {error:null , status:cartStatus }
    const cartItemsList = Object.values(cart.productFullInfo)  //convert dictionary of items to list
    return (
        <div>
            <Loading {...LoadingProps}>
                <GridList<TProduct> 
                items={cartItemsList} renderLoop={renderCarts}  />
            </Loading>
            <CartSubtotalPrice />
        </div>
    )
}
export default Carts;