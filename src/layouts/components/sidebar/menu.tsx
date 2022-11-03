import {
  Dashboard,
  FormatListBulleted,
  Event,
  People,
  StarBorder,
  VerifiedUser,
  Home,
  Games,
  SportsEsports,
  Extension,
} from "@mui/icons-material";

const menu: any = [
  {
    id: 1,
    icon: <Home color="primary" />,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    icon: <Dashboard color="secondary" />,
    title: "Dashboard",
    subMenu: [
      {
        idChild: 1,
        itemIcon: <Event />,
        itemTitle: "Chi tiết sự kiện",
        link: "detailEvent",
      },
      {
        idChild: 2,
        itemIcon: <StarBorder />,
        itemTitle: "Tỷ lệ trúng thưởng",
        link: "rate",
      },
    ],
  },
  {
    id: 3,
    icon: <VerifiedUser sx={{ color: "tomato" }} />,
    title: "System",
    subMenu: [
      {
        idChild: 3,
        itemIcon: <People />,
        itemTitle: "Danh sách User",
        link: "listUser",
      },
      {
        idChild: 4,
        itemIcon: <FormatListBulleted />,
        itemTitle: "Danh sách quyền",
        link: "listRoles",
      },
      {
        idChild: 5,
        itemIcon: <SportsEsports />,
        itemTitle: "Danh sách game",
        link: "listGames",
      },
    ],
  },
  {
    id: 4,
    icon: <Extension sx={{ color: "#FFDE00" }} />,
    title: "GameEvent Settings",
    subMenu: [
      {
        idChild: 6,
        itemIcon: <Games />,
        itemTitle: "Cửu mộng tiên vực",
        link: "listGames/cuu_mong_tien_vuc",
      },
    ],
  },
];
export default menu;
