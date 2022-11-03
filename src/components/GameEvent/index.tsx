import "./gameEvent.scss";
import React, { useState } from "react";
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
import ReactQuill from "react-quill";
import TableItems from "../TableItems";
import QuillToolbar, { formats, modules } from "../../utils/EditorToolbar";
import "react-quill/dist/quill.snow.css";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const GameEvent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [rotationRole, setRotationRole] = useState<string>(
    `<div class="ql-editor" data-gramm="false" contenteditable="true"><p><span style="color: rgb(0, 0, 0);">Thể Lệ Vòng Quay:</span></p><p><span style="color: rgb(0, 0, 0);">♦ Thời Gian Bắt Đầu : 30/06/2022</span></p><p><span style="color: rgb(0, 0, 0);">♦ Thời Gian Kết Thúc : (Thông Báo Sau)</span></p><p><span style="color: rgb(0, 0, 0);">♦ Nội Dung : Người chơi tiến hành nạp Ruby tại trang nap.vplay.vn sẽ được tặng lượt quay để tham gia. Sau khi tiến hành quay sẽ bị trừ lượt quay. Nhận phần thưởng qua Thư inEvent.</span></p><p><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17.000 Ruby:&nbsp; &nbsp; 1 &nbsp; lượt</span></p><p><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;51.000 Ruby:&nbsp; &nbsp; 3 &nbsp; lượt</span></p><p><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;85.000 Ruby:&nbsp; &nbsp; 5 &nbsp; lượt</span></p><p><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;170.000 Ruby: &nbsp; 10 lượt</span></p><p><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;340.000 Ruby: &nbsp; 20 lượt</span></p><p><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;510.000 Ruby: &nbsp; 30 lượt</span></p><p><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;&nbsp;&nbsp;850.000 Ruby: &nbsp; 50 lượt</span></p><p><span style="color: rgb(0, 0, 0);">1.785.000 Ruby: 100 lượt</span></p><p><span style="color: rgb(0, 0, 0);">Chúc Nhà Thám Hiểm chơi game vui vẻ!</span></p><p><br></p><p><br></p></div>`
  );
  const [rotationDesc, setRotationDesc] = useState<string>(
    `<div class="ql-editor" data-gramm="false" contenteditable="true"><p><span style="color: rgb(0, 0, 0);">Tham gia ngay Vòng Quay Nhân Phẩm để nhận những phần thưởng hấp dẫn tặng thêm. Người chơi tiến hành nạp Ruby tại trang nap.vplay.vn sẽ được tặng lượt quay để tham gia. Sau khi tiến hành quay sẽ bị trừ lượt quay. Nhận phần thưởng qua Thư ingame.</span></p></div>`
  );

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(!open)}>
        Chi tiết
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(!open)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "sticky", top: "0" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(!open)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Vòng quay may mắn
            </Typography>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => setOpen(!open)}
            >
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <div className="wrapperGame">
          <div className="top">
            <div className="left">
              <div className="headerTable">
                <h1>Thể lệ vòng quay</h1>
                <Button variant="contained" color="success">
                  Lưu thể lệ
                </Button>
              </div>
              <QuillToolbar />
              <ReactQuill
                theme="snow"
                value={rotationRole}
                onChange={setRotationRole}
                formats={formats}
                modules={modules}
              />
            </div>
            <div className="right">
              <div className="headerTable">
                <h1>Mô tả vòng quay</h1>
                <Button variant="contained" color="success">
                  Lưu mô tả
                </Button>
              </div>
              <ReactQuill
                theme="snow"
                value={rotationDesc}
                onChange={setRotationDesc}
              />
            </div>
          </div>
          <div className="bottom">
            <div className="headerTable">
              <h1>Danh sách vật phẩm</h1>
              <Button variant="outlined">Thêm vật phẩm</Button>
            </div>
            <TableItems />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default React.memo(GameEvent);
