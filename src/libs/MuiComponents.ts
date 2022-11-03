import { Snackbar, Button } from "@mui/material";
import { styled } from "@mui/system";

export const RightSnackbar = styled(Snackbar)(({ theme }) => ({
  "&.MuiSnackbar-root": {
    top: "66px",
  },
}));

export const ButtonGoogle = styled(Button)({
  backgroundColor: "tomato",
  "&:hover": {
    opacity: "0.8",
    backgroundColor: "tomato",
  },
});
