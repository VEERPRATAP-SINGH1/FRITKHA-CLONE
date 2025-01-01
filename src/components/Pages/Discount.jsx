import React from 'react';
import '../../styles/Discount.css';

const CartBanner = () => {
  return (
    <section className="cart-banner pt-100 pb-100">
      <div className="container">
        <div className="row clearfix">
          {/* Image Column */}
          <div className="image-column col-lg-6">
            <div className="image">
              <div className="price-box">
                <div className="inner-price">
                  <span className="price">
                    <strong>30%</strong> <br /> off per kg
                  </span>
                </div>
              </div>
              <img src="Images/products/a.jpg" alt="Hikan Strawberry" />
            </div>
          </div>
          {/* Content Column */}
          <div className="content-column col-lg-6">
            <h3>
              <span className="orange-text">Deal</span> of the month
            </h3>
            <h4>Hikan Strawberry</h4>
            <div className="text">
              Freshly plucked starawberries are taken from the orchards in the DENMARK and supplied to the consumers .
            </div>
            {/* Countdown Timer */}
            <div className="time-counter">
              <div className="time-countdown clearfix" data-countdown="2020/2/01">
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">00</span>Days
                  </div>
                </div>
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">00</span>Hours
                  </div>
                </div>
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">00</span>Mins
                  </div>
                </div>
                <div className="counter-column">
                  <div className="inner">
                    <span className="count">00</span>Secs
                  </div>
                </div>
              </div>
            </div>
            <a href="cart.html" className="cart-btn mt-3">
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartBanner;

