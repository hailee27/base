import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import { useSelector } from "react-redux";

const TotalUser = () => {
  const { listUser } = useSelector((state: any) => state.user);
  // eslint-disable-next-line eqeqeq
  const active = listUser.filter((user: any) => user.status == 1);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Tổng số User
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {listUser.length}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "success.main",
                height: 56,
                width: 56,
              }}
            >
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            pt: 2,
          }}
        >
          <ArrowUpwardIcon color="success" />
          <Typography
            variant="body1"
            sx={{
              mr: 1,
            }}
          >
            {active.length}
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Active
          </Typography>
        </Box>
        <CardActions>
          <Button size="small">Xem chi tiết</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default TotalUser;
