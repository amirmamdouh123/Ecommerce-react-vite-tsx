import { useAppSelector } from "@store/hooks"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { TProduct } from "@types"
import styles from './styles.module.css'

const {subTotalContainerCSS}= styles
function CartSubtotalPrice(){

   const cartState= useAppSelector((state)=>state.cart)

    const getCartTotalPrice=(items:{[item:number]:TProduct})=>{
        let t=0;
        Object.values(items).forEach((el)=>{
            const itemPrice = Number(el.price)
            const itemQuantity=Number(el.quantity??0)       
            
            t += ( itemPrice * itemQuantity )
        })
        return t;
    }

return (
    <div className={subTotalContainerCSS}>
        <span>Subtotal:</span>
        <span>{getCartTotalPrice(cartState.productFullInfo)}.00 EGP</span>
    </div> )
}

export default CartSubtotalPrice