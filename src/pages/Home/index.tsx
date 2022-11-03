import React, { useEffect } from "react";
import "./home.scss";
import Box from "@mui/material/Box";
import TotalUser from "../../components/TotalUser";
import TotalGame from "../../components/TotalGame";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { setInitialState } from "../../redux/slice/authSlice";
import { getListRole } from "../../redux/api/roles";
import { getListUser } from "../../redux/api/user";
import { getListGame } from "../../redux/api/game";
import { checkAuth } from "../../libs/localStorage";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Home = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state: any) => state.auth);
  const token = checkAuth();
  useEffect(() => {
    if (token) {
      getListRole(dispatch);
      getListUser(dispatch);
      getListGame(dispatch);
    }
  }, [token, dispatch]);

  return (
    <div className="home">
      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => dispatch(setInitialState())}
      >
        <Alert
          severity="success"
          onClose={() => dispatch(setInitialState())}
          sx={{ width: "100%" }}
        >
          Đăng nhập thành công
        </Alert>
      </Snackbar>
      <div className="wrapperHome">
        <Box sx={{ width: 300 }}>
          <TotalUser />
        </Box>
        <Box sx={{ width: 300 }}>
          <TotalGame />
        </Box>
      </div>
    </div>
  );
};

export default Home;
