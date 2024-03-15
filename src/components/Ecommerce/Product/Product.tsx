import { Button } from 'react-bootstrap';
import styles from './styles.module.css'
import { IOneProduct } from 'src/types/TResponseProduct';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { addToCart, decrementFromCart } from '@store/carts/cartsSlice';
const {PlusMinusButtonCSS,productCSS, productImg ,productTitle ,buttonStyle} = styles 

function Product({id ,title ,img ,price }:IOneProduct){ 
    const dispatch =useAppDispatch()
    const cartState =useAppSelector((state)=>state.cart)

    // const disblePiusMinusCart=(id:number):boolean=>{
    //         return !cartState.items[id]
    // }

    const handleAddCart=({id,price}:  {id:number , price:number})=>{
        dispatch(addToCart({id,price}));
    }
    const handleDecrementCart=({id,price}:  {id:number , price:number})=>{
        dispatch(decrementFromCart({id,price}));
    }
    

    return (<>
    <div className={productCSS}>
        <div className={productImg}>
            <img src={img} alt="dd" />
        </div>
        <h4 className={productTitle}>{title}</h4>
        <p >Price: {price} EGP</p>

        <Button onClick={()=>{handleAddCart({id,price})}} className={buttonStyle} variant='info' style={{color:'white'}}>Add to Cart</Button><br/>
        {cartState.items[id] &&<>
                <Button onClick={()=>{handleAddCart({id,price})}} className={PlusMinusButtonCSS} variant='info' style={{color:'white'}}>+</Button>
                <Button onClick={()=>{handleDecrementCart({id,price})}} className={PlusMinusButtonCSS} variant='info' style={{color:'white'}}>-</Button>
                </>}
        </div>
        </>)
}
export default Product;