import { createSelector } from "@reduxjs/toolkit";
import { RootStateType } from "@store/Store";

// const getTotalQuantity = createSelector((state :RootstateType)=> state.cart.items
// ,

const getTotalQuantity= createSelector((state:RootStateType)=>state.cart.items,(items)=>{
    console.log("getTotalQuantity");
    return Object.values(items).reduce((accumulate, current)=>{
        return accumulate+current;
    },
    0
    )
})

export default getTotalQuantity;