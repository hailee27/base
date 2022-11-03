import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Chip } from "@mui/material";
import { useSelector } from "react-redux";
import CustomPagination from "../Pagination";

const TableGame = () => {
  const [data, setData] = useState<string>("");
  const { listGame, loading } = useSelector((state: any) => state?.game);
  console.log(data);
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "STT",
      width: 80,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "gameHubId",
      headerName: "Hub ID",
      width: 100,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    { field: "name", headerName: "Tên Game", width: 250, flex: 1 },
    {
      field: "status",
      headerName: "Trạng thái",
      renderCell: (params: any) => {
        return (
          <>
            {params?.row.status && (
              <Chip
                variant="outlined"
                label={
                  params.row.status === 1 ? "Hoạt Động" : "Không Hoạt Động"
                }
                color={params.row.status === 1 ? "success" : "error"}
              />
            )}
          </>
        );
      },
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "select",
      headerName: "Chọn",
      disableColumnMenu: true,
      hideSortIcons: true,
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
      headerAlign: "center",
      align: "center",
    },
  ];
  return (
    <div style={{ height: "85%", width: "100%" }}>
      <DataGrid
        loading={loading}
        rows={listGame}
        columns={columns}
        pageSize={10}
        components={{ Pagination: CustomPagination }}
        disableSelectionOnClick={true}
        // checkboxSelection
      />
    </div>
  );
};

export default TableGame;
