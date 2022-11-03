import React, { useState } from "react";
import "../popUp.scss";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import moment from "moment";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopUpDetailUser = ({ dataDetail }: any) => {
  const date = moment(dataDetail?.createdAt).format("L");
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Chi tiết
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        TransitionComponent={Transition}
      >
        <DialogTitle sx={{ textAlign: "center" }}>{"User Details"}</DialogTitle>
        <DialogContent sx={{ minWidth: "500px", minHeight: "400px" }}>
          <div className="contentPopUp">
            <h4 className="title">UserName</h4>
            <span className="infor">{dataDetail?.fullname}</span>
          </div>
          <div className="contentPopUp">
            <h4 className="title">Email</h4>
            <span className="infor">{dataDetail?.email}</span>
          </div>
          <div className="contentPopUp">
            <h4 className="title">FullName</h4>
            <span className="infor">{dataDetail?.fullname}</span>
          </div>
          <div className="contentPopUp">
            <h4 className="title">Ngày tạo</h4>
            <span className="infor">{date}</span>
          </div>
          <div className="contentPopUp">
            <h4 className="title">Trạng thái</h4>
            <span className="infor">
              {dataDetail?.status === "1" ? "Hoạt động" : "Không hoạt động"}
            </span>
          </div>
          <div className="contentPopUp">
            <h4 className="title">Quyền</h4>
            <span className="infor">
              {dataDetail?.roleId === "1"
                ? "Admin"
                : dataDetail?.roleId === "2"
                ? "Smod"
                : "Manager"}
            </span>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={() => setOpen(!open)}>
            oke
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default React.memo(PopUpDetailUser);
