import { createSlice } from "@reduxjs/toolkit";

interface UserSlice {
  loading: boolean;
  listUser: string[];
  success: boolean;
  error: string | boolean;
}
const initialState: UserSlice = {
  loading: false,
  listUser: [],
  error: false,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // create a new user
    createUserStart: (state) => {
      state.loading = true;
    },
    createUserSuccess: (state, action) => {
      state.loading = false;
      state.listUser.push(action.payload);
      state.success = true;
    },
    createUserFailure: (state, action) => {
      state.error = action.payload || true;
    },

    // get list of users
    getListUserStart: (state) => {
      state.loading = true;
    },
    getListUserSuccess: (state, action) => {
      state.loading = false;
      state.listUser = action.payload;
    },
    getListUserFailure: (state, action) => {
      state.error = action.payload || true;
    },
    setInitStateListUser: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
});
export const {
  createUserStart,
  createUserSuccess,
  createUserFailure,
  getListUserStart,
  getListUserSuccess,
  getListUserFailure,
  setInitStateListUser,
} = userSlice.actions;
export default userSlice.reducer;
