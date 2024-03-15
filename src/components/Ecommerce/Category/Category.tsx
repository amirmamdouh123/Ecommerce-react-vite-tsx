import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import { IOneCategory } from 'src/types/TResponseCategory';
const {categoryCSS, categoryImg ,categoryTitle} = styles 

function Category({title , prefix , img} : IOneCategory){
    
    return (<Link className={categoryCSS} to= {`/products/${prefix}`} >
        <div className={categoryImg}>
            <img src={img} alt="" />  
        </div>
        <h4 className={categoryTitle} >{title}</h4>
        </Link>)
}
export default Category;