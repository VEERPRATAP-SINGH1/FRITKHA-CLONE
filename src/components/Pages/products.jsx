// React component for displaying product section
import "../../styles/products.css";

import React from 'react';

const ProductSection = () => {
  return (
    <div className="product-section mt-30 mb-30">
        <h3><span className="orange-text">Our</span> Products</h3>
        <h4 className="gray-text">We offer a very wide variety of seasonal fruits. The products are directly handpicked from the farms of India and delivered to you.</h4>
                
            <div className="container">
                
                <div className="row">
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="single-product-item">
                        <div className="product-image">
                            <a href="single-product.html"><img src="Images/products/product-img-1.jpg" alt="Strawberry" /></a>
                        </div>
                        <h3>Strawberry</h3>
                        <p className="product-price"><span>Per Kg</span> $85</p>
                        <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 text-center">
                        <div className="single-product-item">
                        <div className="product-image">
                            <a href="single-product.html"><img src="Images/products/product-img-2.jpg" alt="Berry" /></a>
                        </div>
                        <h3>Berry</h3>
                        <p className="product-price"><span>Per Kg</span> $70</p>
                        <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                        <div className="single-product-item">
                        <div className="product-image">
                            <a href="single-product.html"><img src="Images/products/product-img-3.jpg" alt="Lemon" /></a>
                        </div>
                        <h3>Lemon</h3>
                        <p className="product-price"><span>Per Kg</span> $35</p>
                        <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>   
  );
};

export default ProductSection;
