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
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useSelector } from "react-redux";

const TotalGame = () => {
  const { listGame } = useSelector((state: any) => state.game);
  // eslint-disable-next-line eqeqeq
  const active = listGame.filter((game: any) => game.status == 1);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              Tổng số Game
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {listGame.length}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "tomato",
                height: 56,
                width: 56,
              }}
            >
              <SportsEsportsIcon />
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

export default TotalGame;
