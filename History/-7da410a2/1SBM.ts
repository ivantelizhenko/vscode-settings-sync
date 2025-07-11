import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
