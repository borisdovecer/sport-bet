import { IReducers } from "./interfaces";
import userReducer from "./userSlice";

const reducers: IReducers = {
  user: userReducer,
};

export default reducers;
