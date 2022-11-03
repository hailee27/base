import "./game.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInitStateGame } from "../../redux/slice/gameSlice";
import PopUpCreateGame from "../../components/popUp/popUpGames/PopUpCreateGame";
import TableGame from "../../components/TableGame";
import { RightSnackbar } from "../../libs/MuiComponents";
import { Alert, Slide } from "@mui/material";
import { getListGame } from "../../redux/api/game";

const ListGame = () => {
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state: any) => state.auth);
  const { error, success, listGame } = useSelector((state: any) => state.game);

  useEffect(() => {
    listGame.length === 0 && getListGame(dispatch);
  }, [listGame, dispatch]);
  console.log(listGame === "");
  return (
    <div className="wrapperTableGame">
      <RightSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={error}
        // autoHideDuration={6000}
        TransitionComponent={(prop) => {
          return <Slide {...prop} direction="left" />;
        }}
        onClose={() => dispatch(setInitStateGame())}
      >
        <Alert
          severity="error"
          onClose={() => dispatch(setInitStateGame())}
          sx={{ width: "100%" }}
        >
          Không thể thêm Game!
        </Alert>
      </RightSnackbar>
      <RightSnackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={success}
        autoHideDuration={4000}
        TransitionComponent={(prop) => {
          return <Slide {...prop} direction="left" />;
        }}
        onClose={() => dispatch(setInitStateGame())}
      >
        <Alert
          severity="success"
          onClose={() => dispatch(setInitStateGame())}
          sx={{ width: "100%" }}
        >
          Thêm Game thành công!
        </Alert>
      </RightSnackbar>
      <div className="headerTable">
        <h1 className="titleTableGame">Danh Sách Game</h1>
        {userProfile?.roleId === "1" && <PopUpCreateGame />}
      </div>
      <TableGame />
    </div>
  );
};

export default ListGame;
