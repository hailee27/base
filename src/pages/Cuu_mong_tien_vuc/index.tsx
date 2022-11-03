import { Button } from "@mui/material";
import TableEventGame from "../../components/TableEventGame";
import "./game.scss";

const Cuu_mong_tien_vuc = () => {
  return (
    <div className="game">
      <div className="headerTable">
        <h1>Danh sách sự kiện game Cửu mộng tiên vực</h1>
        <Button variant="outlined" color="warning">
          Thêm vòng quay
        </Button>
      </div>
      <TableEventGame />
    </div>
  );
};

export default Cuu_mong_tien_vuc;
