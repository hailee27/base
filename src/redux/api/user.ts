import { checkAuth } from "../../libs/localStorage";
import { httpRequest } from "../../utils/requestMethod";
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  getListUserFailure,
  getListUserStart,
  getListUserSuccess,
} from "../slice/userSlice";

interface UserCreate {
  fullname: string;
  password: string;
  email: string;
  roleId: any;
}
export const creatUser = async (dispatch: any, user: UserCreate) => {
  const accessToken = checkAuth();
  dispatch(createUserStart());
  try {
    const res = await httpRequest.post("/user/create", user, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFailure(err));
  }
};
export const getListUser = async (dispatch: any) => {
  const accessToken = checkAuth();
  dispatch(getListUserStart());
  try {
    const res = await httpRequest.get("/user/list", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(getListUserSuccess(res.data));
  } catch (err) {
    dispatch(getListUserFailure(err));
  }
};
