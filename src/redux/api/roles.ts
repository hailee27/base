import { checkAuth } from "../../libs/localStorage";
import { httpRequest } from "../../utils/requestMethod";
import {
  getListRolesFailure,
  getListRolesStart,
  getListRolesSuccess,
} from "../slice/roleSlice";

export const getListRole = async (dispatch: any) => {
  const accessToken = checkAuth();
  dispatch(getListRolesStart());
  try {
    const res = await httpRequest.get("/role/list", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getListRolesSuccess(res.data));
  } catch (err) {
    dispatch(getListRolesFailure());
  }
};
