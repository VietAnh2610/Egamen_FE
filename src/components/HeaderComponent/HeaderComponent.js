import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/counter/userSlice";
import * as message from "../../components/Message/Message";

const HeaderComponent = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log("user", user);
  }, [user]);

  const handleLogout = async () => {
    try {
      await UserService.logoutUser();
      dispatch(resetUser());
      message.success();
      navigate('/signin');
      // dispatch(clearOrder());
    } catch (error) {
      message.error();
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center header_top py-2">
        <h1>FREE SHIP</h1>
      </div>

      <div className="container px-3 py-2">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <Link to="/">
              <img src="https://theme.hstatic.net/200000696635/1001199686/14/logo.png?v=8" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ marginLeft: 50 }}
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-2">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Sản phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/store" className="nav-link">
                    Hệ thống cửa hàng
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    Tin tức
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/introduce" className="nav-link">
                    Giới thiệu
                  </Link>
                </li>
              </ul>
              <ul className="d-flex header_right">
                {user?.access_token ? (
                  <>
                    <li>
                      <span style={{ fontSize: "16px" }}>
                        Xin chào, {user.email}
                      </span>
                    </li>
                    <li className="hoverSigninup">
                      <i className="fa-regular fa-user"></i>
                      <div className="sign_inup px-3">
                        <Link
                          to="/profile"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          <p className="signup">Thông tin cá nhân</p>
                        </Link>
                        <Link
                          to="/myorders"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          <p className="signup">Đơn hàng của tôi</p>
                        </Link>
                        <Link
                          to="/logout"
                          style={{ color: "white", textDecoration: "none" }}
                          onClick={handleLogout}
                        >
                          <p className="signup">Đăng xuất</p>
                        </Link>
                      </div>
                    </li>
                  </>
                ) : (
                  <li className="hoverSigninup">
                    <i className="fa-regular fa-user"></i>
                    <div className="sign_inup px-3">
                      <Link
                        to="/signup"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        <p className="signup">Đăng ký</p>
                      </Link>
                      <Link
                        to="/signin"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        <p className="signin">Đăng nhập</p>
                      </Link>
                    </div>
                  </li>
                )}
                <li>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </li>
                <li style={{ marginLeft: 20 }}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
