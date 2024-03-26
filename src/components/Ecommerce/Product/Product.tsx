import { TProduct } from "@types";
import styles from './styles.module.css'
import { Button, Spinner } from "react-bootstrap";
import { useAppDispatch } from "@store/index";
import { addToCart } from "@store/carts/cartsSlice";
import React, { useEffect, useState } from "react";
import LikeSVG from "@assets/svg/like.svg?react"
import LikeFill from "@assets/svg/like-fill.svg?react"

import IsLikeOrDis from "@store/wishlist/AsyncAction/LikeOrDisLike";

const {productCSS,productImg, productTitle,buttonStyle,amountCSS , LikeCSS}=styles
function Product({id, title , img  ,price,max,quantity ,isLiked}:TProduct){

    console.log("product");
    
    const dispatch =useAppDispatch()
    const [reachMaxQuantity ,setReachMaxQuantity] =useState(false)
    const [isLoading,setIsLoading] = useState(false);
    const quantityNumber = quantity??0;

    useEffect(()=>{
        if(quantityNumber>=max){
            setReachMaxQuantity(true)
        }
    },[quantityNumber])

    // console.log("id: "+id + " quantity: "+quantityNumber +" max: "+max );
    

    const handleAddCart=()=>{  
        if(!reachMaxQuantity) {
            dispatch(addToCart({id, title , img  ,price,max,quantity: quantityNumber} ))

            setIsLoading(true);
            setTimeout(()=>{
                setIsLoading(false); 
            },400)  
        }
    }

    const handleLikeToggle=()=>{  
        setIsLoading(true);      
        dispatch(IsLikeOrDis({id, title , img  ,price,max,quantity: quantityNumber ,isLiked})).unwrap().then((_)=>{ setIsLoading(false)})   // _ is the state
    }

    return (<div className={productCSS}>

        <div className={productImg}>
            <div className={LikeCSS}>
                {isLoading? <Spinner animation="border" size="sm" variant="primary" /> : isLiked?<LikeFill  onClick={handleLikeToggle}/>: <LikeSVG onClick={handleLikeToggle}  /> }
            </div>
            <img src={img} alt="" />
        </div>
        <h3 className={productTitle}>
            {title}
        </h3>
        <p style={{fontSize:'13px'}}>Price {price}.00 EGP</p>
        <p className={amountCSS}>{max -quantityNumber} items remains </p>
        <Button disabled={reachMaxQuantity || isLoading} onClick={()=>{handleAddCart()}} className={buttonStyle} variant='info' style={{color:'white'}}>
            {isLoading && <Spinner animation="border" size="sm" variant="primary" />}Add to Cart
             </Button>
    
    </div>)
}

export default React.memo(Product)

