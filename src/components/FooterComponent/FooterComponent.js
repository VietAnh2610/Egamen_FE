import React from "react";
import "./FooterComponent.scss";
import logofooter from "../../assets/logo-footer.webp";
import facebook from "../../assets/facebook.webp";
import zalo from "../../assets/zalo.webp";
import instagram from "../../assets/instagram.webp";
import youtube from "../../assets/youtube.webp";
import tiktok from "../../assets/tiktok.webp";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="container px-3 py-5">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-sm-12">
            <div>
              <img src={logofooter} />
            </div>
            <div className="footer-first-item d-flex">
              <i class="fa-solid fa-location-dot"></i>
              <p>Địa chỉ: Đại học Phenikaa, Hà Đông, Hà Nội</p>
            </div>
            <div className="footer-first-item d-flex">
              <i class="fa-solid fa-mobile-screen-button"></i>
              <p>Số điện thoại: 0123456789</p>
            </div>
            <div className="footer-first-item d-flex">
              <i class="fa-solid fa-envelope"></i>
              <p>Email: info.egamen@phenikaa.com</p>
            </div>
            <div className="footer-first-item d-flex">
              <i class="fa-solid fa-circle-info"></i>
              <p>
                Bản quyền thuộc về
                <span className="px-2" style={{ color: "black" }}>
                  EGAMEN
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12 py-3">
            <div className="footer-second-item d-flex ">
              <h4>CHÍNH SÁCH</h4>
            </div>

            <div className="footer-second-item d-flex">
              <a href="">Giới thiệu</a>
            </div>

            <div className="footer-second-item d-flex">
              <a href="">Hệ thống cửa hàng</a>
            </div>

            <div className="footer-second-item d-flex">
              <a href="">Câu hỏi thường gặp</a>
            </div>

            <div className="footer-second-item d-flex">
              <a href="">Gọi điện đặt hàng</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12 py-3">
            <div className="footer-second-item d-flex">
              <h4>HỖ TRỢ KHÁCH HÀNG</h4>
            </div>

            <div className="footer-second-item d-flex">
              <a href="">Liên hệ</a>
            </div>

            <div className="footer-second-item d-flex">
              <a href="/salespolicy">Chính sách bán hàng</a>
            </div>

            <div className="footer-second-item d-flex">
              <a href="/deliverypolicy">Chính sách giao hàng</a>
            </div>

            <div className="footer-second-item d-flex">
              <a href="/returnpolicy">Chính sách đổi trả</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-12 py-3">
            <div className="row">
              <div className="footer-second-item d-flex">
                <h4>ĐĂNG KÝ NHẬN TIN</h4>
              </div>
              <div className="form-footer-input">
                <label className="d-flex" style={{ position: "relative" }}>
                  <input type="text" placeholder="Nhập địa chỉ email"></input>
                  <div className="form-footer-input-item">
                    <p>Đăng ký</p>
                  </div>
                </label>
              </div>
              <div className="footer-info-item d-flex ">
                <img src={facebook} />
                <img src={zalo} />
                <img src={instagram} />
                <img src={youtube} />
                <img src={tiktok} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
