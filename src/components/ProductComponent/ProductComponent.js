import React from "react";
import "./ProductComponent.scss";

const ProductComponent = () => {
  return (
    <div className="col-md-3 col-lg-2 col-6 mb-5">
      <div className="product-component-item" style={{ position: "relative" }}>
        <img
          style={{ width: "100%", zIndex: 1000 }}
          src="https://theme.hstatic.net/200000696635/1001199686/14/frame_2.png?v=8"
        />
        <img
          className="product-image-item"
          src="https://product.hstatic.net/200000696635/product/frame_14_b72c7539500344b5b76513f5de74c83c_medium.png"
        />

        <div className="d-flex flex-column align-items-center">
          <div className="hover-select">
            <div className="hover-select-cart">
              <i class="fa-solid fa-cart-plus"></i>
            </div>
            <div className="hover-select-eye">
              <i class="fa-solid fa-eye"></i>
            </div>
          </div>
        </div>  
      </div>

      <div className="produc-component-info">
        <ul>
          <li>Áo thun nam</li>
          <li>599,900đ</li>
          <li>
            <del>1,300,000đ</del>
            <p className="info-item">-50%</p>
          </li>
        </ul>
        <div className="rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
