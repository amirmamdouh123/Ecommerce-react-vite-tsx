import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productsSlice";
import categoryReducer from "./categories/categoriesSlice";
import cartReducer from  "./carts/cartsSlice";
const store = configureStore({
    reducer:{
        category:categoryReducer,
        product:productReducer,
        cart:cartReducer
}
})

export type RootstateType =ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
 export default store;







