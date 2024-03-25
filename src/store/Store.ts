import productReducer from "./products/productsSlice";
import{persistReducer,persistStore,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER}from"redux-persist";
import storage from "redux-persist/lib/storage";
import categoryReducer from "./categories/categoriesSlice";
import cartReducer from  "./carts/cartsSlice";
import wishlistReducer from "./wishlist/wishlist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
const combinedReducers = combineReducers(
    {
    category:categoryReducer,
    product:productReducer,
    cart:cartReducer,
    wishlist:wishlistReducer
})

const persistCofig= {
    key:'cart',
    storage,
    whitelist:['cart' ,'wishlist']
}

const persistedReducers = persistReducer(persistCofig,combinedReducers)

const store= configureStore({
    reducer:persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, 			PURGE, REGISTER],
        },
    }),
})

const persistedStore = persistStore(store)

export {store,persistedStore};

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch 