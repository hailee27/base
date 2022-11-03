import * as React from "react";
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
import { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { creatUser } from "../../../redux/api/user";
import SelectMultiForm from "../SelectForm/SelectMultiForm";
import SelectSingleForm from "../SelectForm/SelectSingleForm";
import validate from "../../../utils/validate";

interface FromCreate {
  fullname: string;
  password: string;
  email: string;
  roleId: number;
  gameId: any;
  status: number;
}

const PopUpCreateUser = () => {
  const dispatch = useDispatch();
  const { listRoles } = useSelector((state: any) => state.role);
  const { listGame } = useSelector((state: any) => state.game);
  const { success } = useSelector((state: any) => state.user);
  const [open, setOpen] = useState(false);
  const [gameId, setGameId] = useState([]);
  const [roleId, setRoleId] = useState<number>(0);
  const [status, setStatus] = useState<number>(1);
  const [isCheck, setIsCheck] = useState<boolean>(true);
  const [dataForm, setDataForm] = useState<FromCreate>({
    fullname: "",
    password: "",
    email: "",
    roleId,
    gameId,
    status,
  });

  //validate form
  const {
    handleBlur,
    errorName,
    errorPassword,
    errorEmail,
    setErrorName,
    setErrorPassWord,
    setErrorEmail,
  } = validate(dataForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e?.target;
    setDataForm((prev: any) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(e.target.checked);
  };

  //lấy values từ selectMultiForm
  const callbackSelectMulti = (childData: any) => {
    const data = childData?.map((value: any) => Number(value.id));
    setGameId(data);
  };

  // lấy value từ selectSingleForm
  const callbackSelectSingle = (value: any) => {
    const data = Number(value);
    setRoleId(data);
  };

  useEffect(() => {
    isCheck ? setStatus(1) : setStatus(0);
    setDataForm((prev: any) => {
      return {
        ...prev,
        gameId,
        roleId,
        status,
      };
    });
  }, [gameId, isCheck, roleId, status]);
  // console.log(gameId);
  // console.log(roleId);
  console.log(dataForm);
  // console.log(email);
  const handleClose = () => {
    setOpen(!open);
    setDataForm({
      fullname: "",
      password: "",
      email: "",
      roleId: 1,
      gameId: [],
      status: 1,
    });
    setErrorName("");
    setErrorPassWord("");
    setErrorEmail("");
  };
  const handleDeleteChip = (data: any) => {
    setGameId((gameIds) =>
      gameIds.filter((gameId) => gameId !== Number(data.id))
    );
  };

  useEffect(() => {
    success && handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);
  const handleCreate = () => {
    creatUser(dispatch, dataForm);
  };

  return (
    <>
      <Button variant="outlined" color="warning" onClick={() => setOpen(!open)}>
        Create User
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
          Tạo User
        </DialogTitle>
        <DialogContent
          sx={{ minWidth: "550px", minHeight: "450px", width: "500px" }}
        >
          <TextField
            autoFocus
            margin="dense"
            name="fullname"
            label="Full Name"
            inputProps={{ minLength: 10 }}
            error={errorName !== "" ? true : false}
            helperText={errorName}
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            margin="dense"
            name="password"
            label="Password"
            type="password"
            fullWidth
            error={errorPassword !== "" ? true : false}
            helperText={errorPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            error={errorEmail !== "" ? true : false}
            helperText={errorEmail}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Stack
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            direction="row"
          >
            <DialogContentText>Chọn Roles</DialogContentText>
            <SelectSingleForm
              label="Roles"
              listSelect={listRoles}
              onchangeValue={callbackSelectSingle}
            />
          </Stack>
          <Stack
            sx={{ alignItems: "center", justifyContent: "space-between" }}
            direction="row"
          >
            <DialogContentText>Chọn Game</DialogContentText>
            <SelectMultiForm
              label="Games"
              listSelect={listGame}
              onchangeValue={callbackSelectMulti}
              deleteChip={handleDeleteChip}
            />
          </Stack>
          <Stack
            sx={{ alignItems: "center" }}
            direction="row"
            spacing={9}
            mt={2}
          >
            <DialogContentText>Trạng thái</DialogContentText>
            <Switch
              checked={isCheck}
              color="success"
              onChange={handleSwitchChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={
              errorName || errorEmail || errorPassword !== "" ? true : false
            }
            onClick={handleCreate}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PopUpCreateUser;
