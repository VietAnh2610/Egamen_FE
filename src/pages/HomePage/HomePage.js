import React, { useState } from "react";
import SliderHomeComponet from "../../components/SliderHomeComponent/SliderHomeComponent";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import "./HomePage.scss";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <SliderHomeComponet />

      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-6 mb-4 homepage-itroduce">
            <div className="img-homepage-intro">
              <img src="https://theme.hstatic.net/200000696635/1001199686/14/policies_icon_1.png?v=8" />
            </div>
            <div className="text-homepage-intro">
              <p>Miễn phí vận chuyển</p>
              <span>Nhận hàng trong vòng 3 ngày</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-6 mb-4 homepage-itroduce">
            <div className="img-homepage-intro">
              <img src="https://theme.hstatic.net/200000696635/1001199686/14/policies_icon_1.png?v=8" />
            </div>
            <div className="text-homepage-intro">
              <p>Miễn phí vận chuyển</p>
              <span>Nhận hàng trong vòng 3 ngày</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-6 mb-4 homepage-itroduce">
            <div className="img-homepage-intro">
              <img src="https://theme.hstatic.net/200000696635/1001199686/14/policies_icon_1.png?v=8" />
            </div>
            <div className="text-homepage-intro">
              <p>Miễn phí vận chuyển</p>
              <span>Nhận hàng trong vòng 3 ngày</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-6 mb-4 homepage-itroduce">
            <div className="img-homepage-intro">
              <img src="https://theme.hstatic.net/200000696635/1001199686/14/policies_icon_1.png?v=8" />
            </div>
            <div className="text-homepage-intro">
              <p>Miễn phí vận chuyển</p>
              <span>Nhận hàng trong vòng 3 ngày</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center text-align-center">
          <h1 className="text-center mb-5">Thời trang EGA</h1>
          <div className="col-md-6 col-lg-2 col-6 d-flex flex-column align-items-center mb-4 hover-product">
            <div className="img-homepage-intro">
              <img
                src="https://theme.hstatic.net/200000696635/1001199686/14/season_coll_1_img_large.png?v=8"
                className="img-fluid mx-auto"
              />
            </div>
            <div className="text-homepage-products text-center">
              <p className="mb-0">Áo khoác</p>
              <p className="hihi">8 sản phẩm</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-6 d-flex flex-column align-items-center mb-4 hover-product">
            <div className="img-homepage-intro">
              <img
                src="https://theme.hstatic.net/200000696635/1001199686/14/season_coll_2_img_large.png?v=8"
                className="img-fluid mx-auto"
              />
            </div>
            <div className="text-homepage-products text-center">
              <p className="mb-0">Áo sơ mi</p>
              <p className="hihi">8 sản phẩm</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-6 d-flex flex-column align-items-center mb-4 hover-product">
            <div className="img-homepage-intro">
              <img
                src="https://theme.hstatic.net/200000696635/1001199686/14/season_coll_3_img_large.png?v=8"
                className="img-fluid mx-auto"
              />
            </div>
            <div className="text-homepage-products text-center">
              <p className="mb-0">Áo thun</p>
              <p className="hihi">8 sản phẩm</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-6 d-flex flex-column align-items-center mb-4 hover-product">
            <div className="img-homepage-intro">
              <img
                src="https://theme.hstatic.net/200000696635/1001199686/14/season_coll_4_img_large.png?v=8"
                className="img-fluid mx-auto"
              />
            </div>
            <div className="text-homepage-products text-center">
              <p className="mb-0">Quần dài nam</p>
              <p className="hihi">8 sản phẩm</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-6 d-flex flex-column align-items-center mb-4 hover-product">
            <div className="img-homepage-intro">
              <img
                src="https://theme.hstatic.net/200000696635/1001199686/14/season_coll_5_img_large.png?v=8"
                className="img-fluid mx-auto"
              />
            </div>
            <div className="text-homepage-products text-center">
              <p className="mb-0">Quần jeans</p>
              <p className="hihi">8 sản phẩm</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-6 d-flex flex-column align-items-center mb-4 hover-product">
            <div className="img-homepage-intro">
              <img
                src="https://theme.hstatic.net/200000696635/1001199686/14/season_coll_6_img_large.png?v=8"
                className="img-fluid mx-auto"
              />
            </div>
            <div className="text-homepage-products text-center">
              <p className="mb-0">Quần short</p>
              <p className="hihi">8 sản phẩm</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ marginTop: "30px", marginBottom: "20px" }}
      >
        <div className="row justify-content-center text-align-center d-flex">
          <div className="col-12 d-flex align-items-center justify-content-center underline">
            <h1 className="text-center mb-5">Sản phẩm nổi bật</h1>
            <img
              src="https://theme.hstatic.net/200000696635/1001199686/14/flashsale-hot.png?v=8"
              style={{
                marginLeft: "10px",
                width: "50px",
                height: "auto",
                marginTop: "-40px",
              }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row scrollable-row">
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </div>
      </div>

      <div className="all-product">
        <p>Xem tất cả</p>
        <i class="fa-solid fa-chevron-right"></i>
      </div>

      <div className="container">
        <img
          style={{ width: "100%", marginTop: "50px" }}
          src="https://theme.hstatic.net/200000690725/1001078549/14/slide_4_img.jpg?v=415"
        />
      </div>

      <div className="container">
        <div
          className="row justify-content-center text-align-center"
          style={{ marginTop: "50px" }}
        >
          <h1 className="text-center mb-4">Bộ sưu tập xuân hè</h1>
        </div>
      </div>

      <div className="container">
        <div
          className="d-flex justify-content-center"
          style={{ fontSize: "20px", marginBottom:"30px" }}
        >
          {[
            "Bộ sưu tập xuân hè",
            "Bộ sưu tập xuân hè",
            "Bộ sưu tập xuân hè",
          ].map((text, index) => (
            <p
              key={index}
              className={`mx-4 collection-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="row scrollable-row">
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
          <ProductComponent />
        </div>
      </div>

      <div className="all-product">
        <p>Xem tất cả</p>
        <i class="fa-solid fa-chevron-right"></i>
      </div>

    </div>
  );
};

export default HomePage;
