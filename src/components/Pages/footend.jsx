import React from 'react';
import "../../styles/footend.css"; // Import the CSS file for styles

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-box">
              <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
