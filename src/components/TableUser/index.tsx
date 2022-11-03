import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Chip } from "@mui/material";
import { Done, Clear } from "@mui/icons-material";
import CustomPagination from "../Pagination";
import PopUpDetailUser from "../popUp/popUpUser/PopUpDetailUser";
import { useSelector } from "react-redux";
import PopUpSetRoles from "../popUp/popUpUser/PopUpSetRoles";

const TableUser = () => {
  const [page, setPage] = useState(0);
  const { listUser, loading } = useSelector((state: any) => state?.user);
  console.log({ page: page + 1 });
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "STT",
      width: 80,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "email",
      editable: true,
      headerName: "Email",
      width: 230,
      flex: 1,
    },
    {
      field: "fullname",
      editable: true,
      headerName: "Họ và tên",
      width: 340,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      renderCell: (params: any) => {
        return (
          <>
            {params.row.status && (
              <Chip
                variant="outlined"
                label={
                  params.row.status === "1" ? "Hoạt Động" : "Không Hoạt Động"
                }
                color={params.row.status === "1" ? "success" : "error"}
                icon={params.row.status === "1" ? <Done /> : <Clear />}
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
            <PopUpDetailUser dataDetail={params.row} />
            <PopUpSetRoles dataDetail={params.row} />
          </Box>
        );
      },
      width: 200,
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
  ];
  return (
    <div style={{ height: "85%", width: "100%" }}>
      {/* {isShowDetail && } */}

      <DataGrid
        loading={loading}
        // error={error}
        rows={listUser}
        columns={columns}
        pageSize={10}
        page={page}
        components={{
          Pagination: CustomPagination,
        }}
        onPageChange={(newPage) => setPage(newPage)}
        autoPageSize

        // checkboxSelection
      />
    </div>
  );
};

export default TableUser;
