import { FromCreateGame } from "../../components/popUp/popUpGames/PopUpCreateGame";
import { checkAuth } from "../../libs/localStorage";
import { httpRequest } from "../../utils/requestMethod";
import {
  createGameFailure,
  createGameStart,
  createGameSuccess,
  getListGameFailure,
  getListGameStart,
  getListGameSuccess,
} from "../slice/gameSlice";

export const getListGame = async (dispatch: any) => {
  const accessToken = checkAuth();
  dispatch(getListGameStart());
  try {
    const res = await httpRequest.get("/game/list", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getListGameSuccess(res.data));
  } catch (err) {
    dispatch(getListGameFailure());
  }
};

export const createGame = async (dispatch: any, data: FromCreateGame) => {
  const accessToken = checkAuth();
  dispatch(createGameStart());
  try {
    const res = await httpRequest.post("/game/create", data, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(createGameSuccess(res.data));
  } catch (err) {
    dispatch(createGameFailure());
  }
};
