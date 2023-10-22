import { Reducer } from "@reduxjs/toolkit";
export interface IUserState {
  username: string | null;
  token: string | null;
}

export interface IReducers {
  user: Reducer<IUserState>,
}
