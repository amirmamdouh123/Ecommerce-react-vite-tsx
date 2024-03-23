import { Button, Container ,Form } from "react-bootstrap"
import { TProduct } from "src/types/TProduct"
import styles from './style.module.css'
import { useAppDispatch } from "@store/hooks"
import { quantityChange ,deleteFromCart } from "@store/carts/cartsSlice"
import React from "react"
const {cartItem,product,productImg,productInfo} = styles 

function CartItem({ id,title,img ,price,quantity ,max}:TProduct){
    console.log("CartItem run");

    const dispatch =useAppDispatch() 
    const quantityOptions = Array(max).fill(0)
        .map( (_,index)=> {   // (value , index)  value is not needed so it replaced -> _
            return( 
                <option key={index} value={index+1}>
                    {index+1}
                </option>)})
    
    const changeQuantityHandle=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        const newQuantity= Number(event.target.value);
        dispatch(quantityChange({id,newQuantity}))
    }

    const deleteFromCartHandle=()=>{
        console.log("deleteItem");
        
        dispatch(deleteFromCart(id))
    }
    return (
    <Container className={cartItem}>
        <div className={product}>
            <div className={productImg}>
                <img src={img} alt="" />
            </div>
            <div className={productInfo}>
                <h3>{title}</h3>
                <p>Price: {price}.00 EGP</p>
                <Button onClick={deleteFromCartHandle}
                variant="secondary"
                style={{color:"white"}}
                className='mt-auto'
                >Remove</Button>        
                </div>
        </div>

        <div > 
            <span>Quantity</span>
            <Form.Select value={quantity} onChange={(event)=>{changeQuantityHandle(event)}}>
                {quantityOptions}
            </Form.Select>
        </div>
    </Container>
    )
}

export default React.memo(CartItem);