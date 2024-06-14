import React from "react";
import "./SignInPage.scss";

const SignInPage = () => {
  return (
    <div className="container px-5 ">
      <div class="signup_header">
        <p>Trang chủ</p>
        <p>/</p>
        <p style={{ color: "rgb(191, 191, 191)" }}>Đăng nhập</p>
      </div>

      <div className="heading-bar text-center py-5">
        <h1>ĐĂNG NHẬP TÀI KHOẢN</h1>
        <p>
          Bạn chưa có tài khoản ? Đăng ký
          <a href="">tại đây.</a>
        </p>
      </div>

      <div className="formSignup">
        <form>
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

        <p style={{fontSize:"14px"}}>
          Quên mật khẩu? Nhấn vào
          <a className="px-0" style={{textDecoration:"none"}} href=""> đây.</a>
        </p>

        <div className="button-signup">
          <p className="text-center py-3">Đăng nhập</p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
