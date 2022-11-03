import lazyLoading from "../libs/lazyLoading";

export type RouteConfigItemType = {
  path: string;
  Element: React.FC;
};
const Home = lazyLoading(() => import("../pages/Home"));
const ListGame = lazyLoading(() => import("../pages/ListGame"));
const ListUser = lazyLoading(() => import("../pages/ListUser"));
const ListRoles = lazyLoading(() => import("../pages/ListRoles"));
const DetailEvent = lazyLoading(() => import("../pages/DetailEvent"));
const Cuu_mong_tien_vuc = lazyLoading(
  () => import("../pages/Cuu_mong_tien_vuc")
);

const routeConfig: RouteConfigItemType[] = [
  {
    path: "/",
    Element: Home,
  },
  {
    path: "/home",
    Element: Home,
  },
  {
    path: "/listUser",
    Element: ListUser,
  },
  {
    path: "/listRoles",
    Element: ListRoles,
  },
  {
    path: "/listGames",
    Element: ListGame,
  },
  {
    path: "/DetailEvent",
    Element: DetailEvent,
  },
  {
    path: "/listGames/cuu_mong_tien_vuc",
    Element: Cuu_mong_tien_vuc,
  },
];
export default routeConfig;
