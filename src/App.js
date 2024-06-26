import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { routes } from "./routes";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { updateUser } from "./redux/counter/userSlice";
import * as UserService from "./services/UserService";
import { isJsonString } from "./utils";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const { storageData, decoded } = handleDecoded();

    if (decoded && decoded?.id) {
      handleGetDetailsUser(decoded.id, storageData);
    }
  }, []);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);

      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  UserService.axiosJWT.interceptors.request.use(
    async function (config) {
      const currentTime = new Date();
      const { decoded } = handleDecoded();
      if (decoded.exp < currentTime.getTime() / 1000) {
        const data = await UserService.refreshToken();
        config.headers["token"] = `Bearer ${data?.access_token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>

      <FooterComponent />
    </div>
  );
}

export default App;
