import { TProduct } from "src/types/TProduct";
import styles from './styles.module.css'
import { Button } from "react-bootstrap";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/carts/cartsSlice";
import React, { useEffect, useState } from "react";
const {productCSS,productImg, productTitle,buttonStyle,amountCSS}=styles
function Product({id, title , img  ,price,max,quantity}:TProduct){
    
    console.log('one Product run');

    const dispatch =useAppDispatch()
    const [reachMaxQuantity ,setReachMaxQuantity] =useState(false)
    const quantityNumber = quantity??0;

    useEffect(()=>{
        if(quantityNumber>=max){
            setReachMaxQuantity(true)
        }
    },[quantityNumber])


    const handleAddCart=()=>{     
        if(!reachMaxQuantity) {     
            dispatch(addToCart({id, title , img  ,price,max,quantity: quantityNumber +1} ))
        }
    }

    return (<div className={productCSS}>

        <div className={productImg}>
            <img src={img} alt="" />
        </div>
        <h3 className={productTitle}>
            {title}
        </h3>
        <p>Price {price}.00 EGP</p>
        <p className={amountCSS}>{max -quantityNumber} items remains </p>
        <Button disabled={reachMaxQuantity} onClick={()=>{handleAddCart()}} className={buttonStyle} variant='info' style={{color:'white'}}>Add to Cart</Button>
    </div>)
}

export default React.memo(Product)

