import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "STT",
    width: 80,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "nameItem",
    headerName: "Tên vật phẩm",
    width: 350,
    editable: true,
  },
  {
    field: "image",
    headerName: "Hình ảnh",
    width: 250,
    editable: true,

    renderCell: (params: any) => {
      return (
        <img
          style={{
            height: "75px",
            width: "150px",
            objectFit: "cover",
          }}
          src={params?.value}
          alt=""
        />
      );
    },
    align: "center",
    headerAlign: "center",
  },
  {
    field: "description",
    headerName: "Mô tả",
    type: "date",
    sortable: false,
    width: 460,
    headerAlign: "center",
    flex: 1,
  },

  {
    field: "select",
    headerName: "chọn",
    width: 350,
    editable: true,
    align: "center",
    headerAlign: "center",
    disableColumnMenu: true,
    hideSortIcons: true,
    flex: 1,
    renderCell: (params: any) => {
      return (
        <Box sx={{ display: "flex", gap: "12px" }}>
          <Button variant="contained">Sửa</Button>
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
    nameItem: "Cung Amos",
    image: "https://mega.com.vn/media/news/0106_cung-amos.jpg",
    description: "Đây là quà của bạn =)))",
    status: "Active",
  },
  {
    id: 2,
    nameItem: "Trượng hộ ma",
    image: "https://mega.com.vn/media/news/0106_cung-amos.jpg",
    description: "Đây là quà của bạn =)))",
    status: "Active",
  },
  {
    id: 3,
    nameItem: "Đường cùng của sói",
    image: "https://mega.com.vn/media/news/0106_cung-amos.jpg",
    description: "Đây là quà của bạn =)))",
    status: "Active",
  },
];

const TableItems = () => {
  return (
    <Box sx={{ height: "355px", width: "100%" }}>
      <DataGrid
        getRowHeight={() => "auto"}
        rows={rows}
        columns={columns}
        hideFooter
      />
    </Box>
  );
};

export default React.memo(TableItems);
