import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";
const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          paddingTop: "10px",
          paddingBottom: "10px",
          "&.Mui-selected": {
            color: "white",
            backgroundColor: "#FA9494",
            borderRight: "4px solid #EB1D36",
            "&:hover": {
              backgroundColor: "#FA9494",
            },
            "& .MuiListItemIcon-root": {
              color: "white",
            },
          },
          "&:hover": {
            backgroundColor: "#FFF2F2",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "42px",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          marginTop: "16px",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: "#1976d2",
          color: "white",
          fontWeight: 600,
          fontSize: "1.5rem",
        },
      },
    },
  },
});
export default theme;
