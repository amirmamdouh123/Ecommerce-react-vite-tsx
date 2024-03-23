import { Col } from "react-bootstrap";
import { TCateogry } from "src/types/TCategory";
import styles from './styles.module.css'
import { useNavigate } from "react-router-dom";
const {categoryCSS,categoryImg,categoryTitle} =styles
function Category({id , title ,img}:TCateogry){

    const navigate =useNavigate()

    const goToProduct= (prefix:string)=>{
        navigate(`/products/${prefix}`)
    }

    return (<div className={categoryCSS} onClick={()=>{goToProduct(title)}}>
                <div className={categoryImg}>
                    <img src={img} alt="" />
                </div>
                <h3 className={categoryTitle}>{title}</h3>
            </div>)
}

export default Category;