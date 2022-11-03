import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Switch,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { createGame } from "../../../redux/api/game";
import validate from "../../../utils/validate";

export interface FromCreateGame {
  name: string;
  gameHubId: number | null;
  status: number;
}
const PopUpCreateGame = () => {
  const dispatch = useDispatch();
  const { success } = useSelector((state: any) => state.game);
  const [open, setOpen] = useState<boolean>(false);
  const [dataForm, setDataForm] = useState<FromCreateGame>({
    name: "",
    gameHubId: null,
    status: 1,
  });
  const { gameHubId } = dataForm;
  const { errorName, setErrorName, handleBlur } = validate(dataForm);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log(dataForm);
  useEffect(() => {
    setDataForm((prev: any) => {
      return {
        ...prev,
        gameHubId: Number(gameHubId),
      };
    });
  }, [gameHubId]);

  const handleCreateGame = () => {
    createGame(dispatch, dataForm);
  };

  const handleClose = () => {
    setOpen(!open);
    setDataForm({
      name: "",
      gameHubId: null,
      status: 1,
    });
    setErrorName("");
  };
  useEffect(() => {
    success && handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);
  return (
    <>
      <Button variant="outlined" color="warning" onClick={() => setOpen(!open)}>
        Create Game
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            backgroundColor: "crimson",
          }}
        >
          Tạo Game
        </DialogTitle>
        <DialogContent
          sx={{ minWidth: "550px", minHeight: "250px", width: "500px" }}
        >
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name Game"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            error={errorName !== "" ? true : false}
            helperText={errorName}
          />
          <TextField
            margin="dense"
            name="gameHubId"
            label="Game Hub ID"
            fullWidth
            inputProps={{ pattern: "[0-9]{10}" }}
            onChange={handleChange}
          />
          <Stack
            sx={{ alignItems: "center" }}
            direction="row"
            spacing={9}
            mt={2}
          >
            <DialogContentText>Trạng thái</DialogContentText>
            <Switch color="success" defaultChecked />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={errorName !== "" ? true : false}
            onClick={handleCreateGame}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopUpCreateGame;
