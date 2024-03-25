// import WishlistSVG  from '@assets/svg/wishlist.svg?react' 
// import styles from './WishlistStyle.module.css'
// import { useEffect, useState } from 'react'
// import { useAppSelector } from '@store/hooks'
// import { useNavigate } from 'react-router-dom'
// const {wishlistCSS,wishlistsvgCSS,wishlistQuantityCSS,pumpCartQuantityCSS ,spanWishList} = styles 

// function WishlistComp(){
//     const [isAnimated ,setIsAnimated]= useState(false)
//     const countWishlist = useAppSelector((state)=>state.wishlist.wishItems.length);
//     const wishlistPumpStyle = `${wishlistQuantityCSS} ${isAnimated && pumpCartQuantityCSS}` 

//     const navigate= useNavigate()


//     useEffect(()=>{
//         setIsAnimated(true);
//         setTimeout(()=>{
//             setIsAnimated(false);
//         },300)
//     },[countWishlist])

//     return (
//         <div className={wishlistCSS} onClick={()=>{navigate('/wishlist')}}>
//             <WishlistSVG className={wishlistsvgCSS}/>
//             {countWishlist>0 && <p className={wishlistPumpStyle}>{countWishlist}</p> }
//             <p className={spanWishList}>Wishlist</p>
//         </div>
//     )
// }

// export default WishlistComp;