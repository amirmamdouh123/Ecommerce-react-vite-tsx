import { useDispatch ,useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux"; //use selector 3adi bs constrained by a type
import type { RootstateType ,AppDispatch } from "@store/Store";


export const useAppDispatch : ()=> AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootstateType> = useSelector;



