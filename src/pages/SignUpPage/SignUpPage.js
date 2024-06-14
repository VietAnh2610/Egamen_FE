import React from "react";
import "./SignUpPage.scss";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="container px-5 ">
      <div class="signup_header">
        <Link className="link-homepage" to="/">Trang chủ</Link>
        <p>/</p>
        <p style={{ color: "rgb(191, 191, 191)" }}>Đăng ký</p>
      </div>

      <div className="heading-bar text-center py-5">
        <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
        <p>
          Bạn đã có tài khoản ? Đăng nhập
          <a href="">tại đây.</a>
        </p>
      </div>

      <div className="formSignup">
        <div className="text-center">
          <h1>THÔNG TIN CÁ NHÂN</h1>
        </div>
        <form>
          <div className="form-Signup-Input">
            <label>
              Họ<span>*</span>
            </label>
            <input type="text" placeholder="Họ"></input>
          </div>
          <div className="form-Signup-Input">
            <label>
              Tên<span>*</span>
            </label>
            <input type="text" placeholder="Tên"></input>
          </div>
          <div className="form-Signup-Input">
            <label>
              Số điện thoại<span>*</span>
            </label>
            <input type="number" placeholder="Số điện thoại"></input>
          </div>
          <div className="form-Signup-Input">
            <label>
              Email<span>*</span>
            </label>
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="form-Signup-Input">
            <label>
              Mật khẩu<span>*</span>
            </label>
            <input type="text" placeholder="Mật khẩu"></input>
          </div>
        </form>

        <div className="button-signup">
          <p className="text-center py-3">Đăng ký</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
