import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import gameSlice from "./slice/gameSlice";
import userSlice from "./slice/userSlice";
import roleSlice from "./slice/roleSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    game: gameSlice,
    role: roleSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
