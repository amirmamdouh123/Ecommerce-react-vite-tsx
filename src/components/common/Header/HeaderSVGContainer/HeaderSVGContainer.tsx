import GenericSVG from "./GenericSVG/GenericSVG";
import WishlistSVG  from '@assets/svg/wishlist.svg?react' 
import StoreSVG from '@assets/svg/store-svgrepo-com.svg?react';
import { useAppSelector } from "@store/hooks";
import styles from '../HeaderSVGContainer/GenericSVG/SVGStyle.module.css'

const { iconSvgCSS ,iconsContainer } =styles
function HeaderSVGContainer(){
    const countWishlist = useAppSelector((state)=>state.wishlist.wishItems.length);
    const countCarts = useAppSelector((state)=>state.cart.items);
    const getCountCarts=()=>{
        return Object.values(countCarts).reduce((accumulate , current)=>{
            return accumulate + current;
        },0)
    }
    return (    
    <div className={iconsContainer} style={{ margin:'8px'  ,display:'flex'}}>
        <GenericSVG SvgIcon ={ <WishlistSVG  className={iconSvgCSS}/>} countItems={countWishlist} navigatePage="/wishlist"   />
        <GenericSVG SvgIcon ={ <StoreSVG  className={iconSvgCSS}/>} countItems={getCountCarts()} navigatePage="/cart" />
  </div>)
}

export default HeaderSVGContainer;