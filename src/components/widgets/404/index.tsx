import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <Box
      sx={{
        fontSize: "200px",
        textAlign: "center",
      }}
    >
      404
      <Link to="/">
        <Button
          sx={{ position: "absolute", left: "50%", top: "50%" }}
          variant="outlined"
        >
          Back Home
        </Button>
      </Link>
    </Box>
  );
}
