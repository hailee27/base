import React, { useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import { useSelector } from "react-redux";
import SelectSingleForm from "../SelectForm/SelectSingleForm";
import SelectMultiForm from "../SelectForm/SelectMultiForm";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopUpSetRoles = ({ dataDetail }: any) => {
  const { listRoles } = useSelector((state: any) => state.role);
  const { listGame } = useSelector((state: any) => state.game);
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<any>(dataDetail);

  const callbackSelectSingle = (value: any) => {
    setData((prev: any) => {
      return {
        ...prev,
        roleId: value,
      };
    });
  };
  const callbackSelectMulti = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(!open)}>
        Phân Quyền
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        TransitionComponent={Transition}
      >
        <DialogTitle sx={{ textAlign: "center" }}>{"Phân quyền"}</DialogTitle>
        <DialogContent sx={{ minWidth: "500px", minHeight: "400px" }}>
          <div className="contentPopUp">
            <h4 className="title">Phân quyền User</h4>
            <span className="infor">{data?.fullname}</span>
          </div>
          <div className="contentPopUp">
            <h4 className="title">Chọn quyền</h4>
            <SelectSingleForm
              label="Roles"
              data={data?.roleId}
              listSelect={listRoles}
              onchangeValue={callbackSelectSingle}
            />
          </div>
          <div className="contentPopUp">
            <h4 className="title">Chọn game quản lý</h4>
            <SelectMultiForm
              label="RolesGame"
              data={data?.rolesGame}
              listSelect={listGame}
              onchangeValue={callbackSelectMulti}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            onClick={() => setOpen(!open)}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default React.memo(PopUpSetRoles);
