import StoreSVG from '@assets/svg/store-svgrepo-com.svg?react';
import './BasketStyle.css'
function  BasketSVG(){
    return (
        <div className="basket">
                <StoreSVG className="storesvg" />
                <p className='basketQuantity'>0</p>
        </div>
    )
}

export default BasketSVG;