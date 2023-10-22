import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from ".";

// Define a custom useDispatch hook using the AppDispatch type
// This custom hook ensures proper type checking when dispatching actions in components
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Define a custom useSelector hook with RootState type
// This custom hook ensures proper type checking when selecting state slices in components
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
