import React from "react";
import "./HeaderComponent.scss";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <div class="d-flex justify-content-center header_top py-2">
        <h1>FREE SHIP</h1>
      </div>

      <div className="container px-3 py-3">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid">
            <img src="https://theme.hstatic.net/200000696635/1001199686/14/logo.png?v=8" />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ marginLeft: 50 }}
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">
                    Trang chủ
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products" class="nav-link">
                    Sản phẩm
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/store" class="nav-link">
                    Hệ thống cửa hàng
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/blog" class="nav-link">
                    Tin tức
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/introduce" class="nav-link">
                    Giới thiệu
                  </Link>
                </li>
              </ul>
              <ul class="d-flex header_right">
                <li>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </li>

                <li className="hoverSigninup">
                  <i class="fa-regular fa-user"></i>
                  <div className="sign_inup px-3">
                    <Link
                      to="/signup"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <p>Đăng ký</p>
                    </Link>
                    <Link
                      to="/signin"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      <p>Đăng nhập</p>
                    </Link>
                  </div>
                </li>

                <li style={{ marginLeft: 20 }}>
                  <i class="fa-solid fa-cart-shopping"></i>
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
