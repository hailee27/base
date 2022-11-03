import { createSlice } from "@reduxjs/toolkit";

interface RoleSlice {
  loading: boolean;
  listRoles: string[];
  error: boolean;
}
const initialState: RoleSlice = {
  loading: false,
  listRoles: [],
  error: false,
};
const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    getListRolesStart: (state) => {
      state.loading = true;
    },
    getListRolesSuccess: (state, action) => {
      state.loading = false;
      state.listRoles = action.payload;
    },
    getListRolesFailure: (state) => {
      state.error = true;
    },
  },
});
export const { getListRolesStart, getListRolesSuccess, getListRolesFailure } =
  roleSlice.actions;
export default roleSlice.reducer;
