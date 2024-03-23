import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootStateType,DispatchType } from "./Store";

export const useAppDispatch : ()=> DispatchType = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootStateType> = useSelector

