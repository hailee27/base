import { checkAuth } from "../../libs/localStorage";
import { httpRequest } from "../../utils/requestMethod";
import {
  getProfileFailure,
  getProfileStart,
  getProfileSuccess,
} from "../slice/authSlice";

export const getProfile = async (dispatch: any) => {
  const accessToken = checkAuth();
  dispatch(getProfileStart());
  try {
    const res = await httpRequest.get("/user/profile", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getProfileSuccess(res.data));
  } catch (err) {
    dispatch(getProfileFailure());
    console.log(err);
  }
};
