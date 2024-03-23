import StoreSVG from '@assets/svg/store-svgrepo-com.svg?react';
import styles from './BasketStyle.module.css'
import { useAppSelector } from '@store/hooks';
import getTotalQuantity from '@store/carts/selectors/selectors';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const {basketCSS,storesvgCSS,basketQuantityCSS,pumpCartQuantityCSS} = styles 

function  BasketSVG(){
    const navigate =useNavigate()
    const itemCount = useAppSelector((state)=>getTotalQuantity(state));    
    const [isAnimated ,  setIsAnimated] = useState(false);
    const basketQuantityStyle =`${basketQuantityCSS} ${isAnimated&&pumpCartQuantityCSS} `

    useEffect(()=>{
        setIsAnimated(true);
        setTimeout(()=>{
            setIsAnimated(false);
        },300);
    },[itemCount])

    return (
        <div className={basketCSS} onClick={()=>{navigate('/cart')}}>
                <StoreSVG className={storesvgCSS} />
                <div className={basketQuantityStyle}>{itemCount}</div>
        </div>
    )
}

export default BasketSVG;