import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Chip } from "@mui/material";
import CustomPagination from "../Pagination";
import { useSelector } from "react-redux";

const TableRoles = () => {
  const [data, setData] = useState("");
  const { listRoles } = useSelector((state: any) => state.role);
  console.log(data);
  console.log(listRoles);
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "STT",
      width: 30,
      align: "center",
      headerAlign: "center",
    },
    { field: "name", headerName: "Tên quyền", width: 200 },
    { field: "info", headerName: "Mô tả", width: 300, flex: 1 },
    {
      field: "status",
      headerName: "Trạng thái",
      align: "center",
      headerAlign: "center",
      renderCell: (params: any) => {
        return (
          <>
            {params?.row.status && (
              <Chip
                variant="outlined"
                label={
                  params?.row.status === 1 ? "Hoạt Động" : "Không Hoạt Động"
                }
                color={params.row.status === 1 ? "success" : "warning"}
              />
            )}
          </>
        );
      },
      width: 200,
    },
    {
      field: "select",
      headerName: "Chọn",
      disableColumnMenu: true,
      hideSortIcons: true,
      align: "center",
      headerAlign: "center",
      renderCell: (params: any) => {
        return (
          <Box sx={{ display: "flex", gap: "12px" }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setData(params.row)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setData(params.row)}
            >
              Delete
            </Button>
          </Box>
        );
      },
      flex: 1,
    },
  ];
  return (
    <div style={{ height: "85%", width: "100%" }}>
      <DataGrid
        rows={listRoles}
        columns={columns}
        pageSize={5}
        components={{ Pagination: CustomPagination }}
        // checkboxSelection
      />
    </div>
  );
};

export default TableRoles;
