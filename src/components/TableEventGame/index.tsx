import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CustomPagination from "../Pagination";
import { Button } from "@mui/material";
import GameEvent from "../GameEvent";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "STT",
    width: 80,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "rotateName",
    headerName: "Tên vòng quay",
    width: 300,
    flex: 1,
    editable: true,
  },
  {
    field: "start",
    headerName: "Bắt Đầu",
    type: "date",
    width: 200,
    editable: true,
    flex: 1,
  },
  {
    field: "end",
    headerName: "Kết thúc",
    type: "date",
    sortable: false,
    width: 200,
    flex: 1,
  },

  {
    field: "status",
    headerName: "Trạng thái",
    width: 200,
    editable: true,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "select",
    headerName: "chọn",
    width: 250,
    editable: true,
    flex: 1,
    align: "center",
    sortable: true,
    headerAlign: "center",
    disableColumnMenu: true,
    hideSortIcons: true,
    renderCell: (params: any) => {
      return (
        <Box sx={{ display: "flex", gap: "12px" }}>
          <GameEvent />
          <Button variant="contained" color="error">
            Xóa
          </Button>
        </Box>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    rotateName: "Vòng quay Yoimiya",
    start: "20/11/2022 10:00",
    end: "27/11/2022 12:00",
    status: "Active",
  },
  {
    id: 2,
    rotateName: "Vòng quay Ganyu",
    start: "20/11/2022 10:00",
    end: "27/11/2022 12:00",
    status: "Active",
  },
  {
    id: 3,
    rotateName: "Vòng quay Ayaka",
    start: "20/11/2022 10:00",
    end: "27/11/2022 12:00",
    status: "Active",
  },
  {
    id: 4,
    rotateName: "Vòng quay Raiden Shogun",
    start: "20/11/2022 10:00",
    end: "27/11/2022 12:00",
    status: "Active",
  },
];

const TableEventGame = () => {
  return (
    <Box sx={{ height: "85%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[4]}
        components={{ Pagination: CustomPagination }}
      />
    </Box>
  );
};

export default TableEventGame;
