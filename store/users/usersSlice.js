import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUsers } from "./../../lib/usersAPI";

let initialState = {
  users: [],
};
export const getUsers = createAsyncThunk("users/getUsers", GetUsers);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      console.log("users state: ", action.payload);
    },
  },
});

export default usersSlice.reducer;
