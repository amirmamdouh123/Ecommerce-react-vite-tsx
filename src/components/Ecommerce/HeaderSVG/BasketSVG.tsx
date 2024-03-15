import StoreSVG from '@assets/svg/store-svgrepo-com.svg?react';
import './BasketStyle.css'
import { useAppSelector } from '@store/hooks';
import getTotalQuantity from '@store/carts/selectors/selectors';

function  BasketSVG(){
    
    const itemCount = useAppSelector((state)=>getTotalQuantity(state.cart));
    console.log('render');

    return (
        <div className="basket">
                <StoreSVG className="storesvg" />
                <p className='basketQuantity'>{itemCount}</p>
        </div>
    )
}

export default BasketSVG;