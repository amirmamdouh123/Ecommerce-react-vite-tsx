import { Button } from 'react-bootstrap';
import styles from './styles.module.css'
import { IOneProduct } from 'src/types/TResponseProduct';
const {productCSS, productImg ,productTitle ,buttonStyle} = styles 



function Product({title,img ,price}:IOneProduct){  
    return (<>
    <div className={productCSS}>
        <div className={productImg}>
            <img src={img} alt="dd" />
        </div>
        <h4 className={productTitle}>{title}</h4>
        <p >Price: {price}</p>

        <Button className={buttonStyle} variant='info' style={{color:'white'}}>Add to Cart</Button>
        </div>
        </>)
}
export default Product;