import React from 'react';
import "../../styles/banner.css";

const ShopBanner = () => {
  return (
    <section className="shop-banner">
      <div className="container">
        <div className="banner-content">
          <div className="banner-text">
            <h3>
              December sale is on! <br /> with big <span className="orange-text">Discount...</span>
            </h3>
            <div className="sale-percent">
              <span>Sale! , Upto 50% off</span>
            </div>
            <div className="cart-btn btn-lg">
              Shop Now
            </div>
          </div>
          <div className="banner-logo">
            <img src="Images/fruit-basket.png" alt="Logo" className="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
