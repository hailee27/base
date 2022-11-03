/* eslint-disable eqeqeq */
import "./user.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "../../libs/localStorage";
import { getListUser } from "../../redux/api/user";
import PopUpCreateUser from "../../components/popUp/popUpUser/PopUpCreateUser";
import { setInitStateListUser } from "../../redux/slice/userSlice";
import { RightSnackbar } from "../../libs/MuiComponents";
import TableUser from "../../components/TableUser";
import { Alert, Slide } from "@mui/material";

const ListUser = () => {
  const { userProfile } = useSelector((state: any) => state.auth);
  const { success, error } = useSelector((state: any) => state.user);
  const [isError, setIsError] = useState<boolean>(false);
  const dispatch = useDispatch();
  const token = checkAuth();
  useEffect(() => {
    token && getListUser(dispatch);
  }, [token, dispatch]);

  useEffect(() => {
    error.response?.data.statusCode === 400
      ? setIsError(true)
      : setIsError(false);
  }, [error.response?.data.statusCode]);
  return (
    <div className="wrapperTableUser">
      <RightSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isError}
        // autoHideDuration={6000}
        TransitionComponent={(prop) => {
          return <Slide {...prop} direction="left" />;
        }}
        onClose={() => dispatch(setInitStateListUser())}
      >
        <Alert
          severity="error"
          onClose={() => dispatch(setInitStateListUser())}
          sx={{ width: "100%" }}
        >
          Không thể thêm User!
        </Alert>
      </RightSnackbar>
      <RightSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={success}
        autoHideDuration={4000}
        TransitionComponent={(prop) => {
          return <Slide {...prop} direction="left" />;
        }}
        onClose={() => dispatch(setInitStateListUser())}
      >
        <Alert
          severity="success"
          onClose={() => dispatch(setInitStateListUser())}
          sx={{ width: "100%" }}
        >
          Thêm User thành công!
        </Alert>
      </RightSnackbar>
      <div className="headerTable">
        <h1 className="titleTableUser">Danh Sách User</h1>
        {userProfile?.roleId == 1 && <PopUpCreateUser />}
      </div>
      <TableUser />
    </div>
  );
};

export default ListUser;
