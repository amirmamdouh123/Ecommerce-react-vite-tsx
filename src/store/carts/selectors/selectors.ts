import { createSelector } from "@reduxjs/toolkit"
import { RootstateType } from "@store/Store"
import { useAppSelector } from "@store/hooks";
import { TInitialState } from "../cartsSlice";

// const getTotalQuantity = createSelector((state :RootstateType)=> state.cart.items
// ,

const getTotalQuantity= (state :TInitialState)=> {
    console.log("getTotalQuantity");
    return Object.values(state.items).reduce((accumulate, current)=>{
        return accumulate+current;
    },
    0
    )
}

export default getTotalQuantity;