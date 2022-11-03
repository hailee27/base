import "./sidebar.scss";
import { useState, FC, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import images from "../../../assets/images";
import menu from "./menu";
// import { useSelector } from "react-redux";

const SideBar: FC = () => {
  // const { userProfile } = useSelector((state: any) => state.auth);
  const openMenuKey: any = localStorage.getItem("openmenu");
  const [openMenu, setOpenMenu] = useState<number>(JSON.parse(openMenuKey));
  const location = useLocation();
  let activeMenu = location.pathname.slice(1);
  console.log(activeMenu);

  const handleClick = (idMenu: number) => {
    openMenu === idMenu ? setOpenMenu(0) : setOpenMenu(idMenu);
  };

  // useEffect(() => {
  //   // chỉ roleId =1 thì mới được vào system
  //   userProfile?.roleId === "1" &&
  //     menu.forEach((menuItem) => {
  //       if (menuItem.id === 3) {
  //         menu = menu.filter((item) => item !== menuItem);
  //       }
  //     });
  //   console.log(menu);
  // }, [userProfile?.roleId]);
  useEffect(() => {
    localStorage.setItem("openmenu", JSON.stringify(openMenu));
  });

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <img className="logo" src={images.Logo} alt="logo" />
        </Link>
        <h1>CMS .</h1>
      </div>
      <div className="bottom">
        {menu?.map((menuItem: any) => (
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            key={menuItem.id}
          >
            {!menuItem.link ? (
              <ListItemButton onClick={() => handleClick(menuItem.id)}>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText
                  primary={menuItem.title}
                  sx={{ fontWeight: "500" }}
                />
                {menuItem.subMenu &&
                  (openMenu === menuItem.id ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            ) : (
              <Link to={`/${menuItem.link}`} className="navLink">
                <ListItemButton selected={activeMenu === menuItem.link}>
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText primary={menuItem.title} />
                </ListItemButton>
              </Link>
            )}
            <Collapse
              in={openMenu === menuItem.id}
              timeout="auto"
              unmountOnExit
            >
              {menuItem.subMenu?.map((subMenuItem: any, index: number) => (
                <List component="div" disablePadding key={index}>
                  <Link to={`/${subMenuItem.link}`} className="navLink">
                    <ListItemButton
                      sx={{ pl: 4 }}
                      selected={activeMenu === subMenuItem.link}
                    >
                      <ListItemIcon>{subMenuItem.itemIcon}</ListItemIcon>
                      <ListItemText primary={subMenuItem.itemTitle} />
                    </ListItemButton>
                  </Link>
                </List>
              ))}
            </Collapse>
          </List>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
