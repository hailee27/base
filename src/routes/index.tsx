import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import routeConfig, { RouteConfigItemType } from "./routeConfig";
import DefaultLayout from "../layouts/DefaultLayout";
import NotFound from "../components/widgets/404";
import { checkAuth } from "../libs/localStorage";

const RouteApp = () => {
  const token: string = checkAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/");
  }, [navigate, token]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      {routeConfig.map(
        ({ path, Element }: RouteConfigItemType, index: number) => (
          <Route
            key={index}
            path={path}
            element={
              token ? (
                <DefaultLayout>
                  <Element />
                </DefaultLayout>
              ) : (
                <Login />
              )
            }
          />
        )
      )}
    </Routes>
  );
};

export default RouteApp;
