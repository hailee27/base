import { createSlice } from "@reduxjs/toolkit";
import { clearStoreAuth } from "../../libs/localStorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setStoreAuth } from "../../libs/localStorage";
import { httpRequest } from "../../utils/requestMethod";

interface AuthSlice {
  loading: boolean;
  userProfile: string | null;
  error: boolean;
  success: boolean;
}

export const login = createAsyncThunk(
  "auth/login",
  async (data: any, { rejectWithValue }) => {
    try {
      const res = await httpRequest.post("/auth/login", data);
      return res.data;
    } catch (err) {
      let error: any = err;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

// export const getUserProfile = createAsyncThunk(
//   "user/getUserProfile",
//   async (arg, { getState, rejectWithValue }) => {
//     try {
//       const { auth }: any = getState();
//       const res = await httpRequest.get("/user/profile", {
//         headers: { Authorization: `Bearer ${auth.accessToken}` },
//       });
//       return res.data;
//     } catch (err) {
//       let error: any = err;
//       if (!error.response) {
//         throw err;
//       }
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

const initialState: AuthSlice = {
  loading: false,
  userProfile: null,
  error: false,
  success: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //get profile
    getProfileStart: (state) => {
      state.loading = true;
    },
    getProfileSuccess: (state, action) => {
      state.loading = false;
      state.userProfile = action.payload;
    },
    getProfileFailure: (state) => {
      state.error = true;
    },
    //logout
    logout: (state) => {
      clearStoreAuth();
      state.loading = false;
      state.error = false;
    },
    setInitialState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
    },
  },
  extraReducers: {
    //login
    [login.pending as any]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [login.fulfilled as any]: (state, { payload }) => {
      state.loading = false;
      setStoreAuth(payload);
      state.success = true;
    },
    [login.rejected as any]: (state) => {
      state.loading = false;
      state.error = true;
    },
    //get profile user
    // [getUserProfile.pending as any]: (state) => {
    //   state.loading = true;
    // },
    // [getUserProfile.fulfilled as any]: (state, { payload }) => {
    //   state.loading = false;
    //   state.userProfile = payload;
    //   state.success = true;
    // },
    // [getUserProfile.rejected as any]: (state) => {
    //   state.loading = false;
    //   state.error = true;
    // },
  },
});
export const {
  logout,
  setInitialState,
  getProfileStart,
  getProfileSuccess,
  getProfileFailure,
} = authSlice.actions;

export default authSlice.reducer;
