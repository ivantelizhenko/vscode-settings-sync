import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";

const useAppDispatch = useDispatch.withTypes<AppDispatch>();
const useAppSelector = useSelector.withTypes<AppDispatch>();
