import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link, { LinkProps } from "@mui/material/Link";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const breadcrumbNameMap: { [key: string]: string } = {
  "/listUser": "Danh sách user",
  "/listRoles": "Danh sách quyền",
  "/listGames": "Danh sách games",
  "/detailEvent": "Chi tiết sự kiện",
  "/listGames/cuu_mong_tien_vuc": "Cửu mộng tiên vực",
};
const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);
const BreadCrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ padding: "12px 0 0 16px" }}>
      <LinkRouter
        sx={{ display: "flex", alignItems: "center" }}
        underline="hover"
        color="inherit"
        to="/"
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography
            color="text.primary"
            sx={{ display: "flex", alignItems: "center" }}
            key={to}
          >
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
};

export default React.memo(BreadCrumb);
