import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './SVGStyle.module.css'
const {iconContainerCSS,quantityCSS,pumpQuantityCSS ,titleIconCSS} = styles 

export type TSvg={
    SvgIcon:React.ReactNode ,
    countItems:number ,
    navigatePage:string }

function GenericSVG({ SvgIcon ,countItems , navigatePage } :TSvg){

    const [isAnimated ,setIsAnimated]= useState(false)
    const wishlistPumpStyle = `${quantityCSS} ${isAnimated && pumpQuantityCSS}` 

    const navigate= useNavigate()


    useEffect(()=>{
        setIsAnimated(true);
        setTimeout(()=>{
            setIsAnimated(false);
        },300)
    },[countItems])

    return (
        <div className={iconContainerCSS} onClick={()=>{navigate(navigatePage)}}>
            {SvgIcon}
            {countItems>0 && <p className={wishlistPumpStyle}>{countItems}</p> }
            <p className={titleIconCSS}>{navigatePage.slice(1)}</p>
        </div>
    )}

export default GenericSVG;