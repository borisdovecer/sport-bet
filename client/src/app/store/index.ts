import rootReducers from "./slices";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { configureStore, AnyAction, ThunkMiddleware } from "@reduxjs/toolkit";

/**
 * Configure and create the Redux store with the root reducers and enable Redux DevTools
 */
export const store: storeType = configureStore({
  reducer: rootReducers,
  devTools: true,
});

type storeType = ToolkitStore<any, AnyAction, [ThunkMiddleware<unknown, AnyAction, undefined>]>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
