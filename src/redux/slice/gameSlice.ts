import { createSlice } from "@reduxjs/toolkit";

interface GameSlice {
  loading: boolean;
  listGame: string[];
  error: boolean;
  success: boolean;
}
const initialState: GameSlice = {
  loading: false,
  listGame: [],
  error: false,
  success: false,
};
const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    //get list game
    getListGameStart: (state) => {
      state.loading = true;
    },
    getListGameSuccess: (state, action) => {
      state.loading = false;
      state.listGame = action.payload;
    },
    getListGameFailure: (state) => {
      state.error = true;
    },
    // create game
    createGameStart: (state) => {
      state.loading = true;
    },
    createGameSuccess: (state, action) => {
      state.loading = false;
      state.listGame.push(action.payload);
      state.success = true;
    },
    createGameFailure: (state) => {
      state.error = true;
    },
    setInitStateGame: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
    },
  },
});
export const {
  getListGameStart,
  getListGameSuccess,
  getListGameFailure,
  createGameStart,
  createGameSuccess,
  createGameFailure,
  setInitStateGame,
} = gameSlice.actions;
export default gameSlice.reducer;
