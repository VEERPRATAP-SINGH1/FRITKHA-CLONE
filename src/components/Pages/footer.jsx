import React from 'react';
import "../../styles/footer.css"; 

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="foot">
        <div className="foo">
          <div className="hss">
            <div className="footer-box about-widget">
              <h2 className="widget-title">About us</h2>
              <p>
                We are one of the leading supplier of fruits in the SOUTH-EAST ASIA , we are advancing int Middle-East very soon.
              </p>
            </div>
          </div>
          <div className="hs">
            <div className="footer-box get-in-touch">
              <h2 className="widget-title">Get in Touch</h2>
              <ul>
                <li>34/8, Mohali, Punjab</li>
                <li>support@fruitkha.com</li>
                <li>+91 111 222 3333</li>
              </ul>
            </div>
          </div>
          <div className="hs">
            <div className="footer-box pages">
              <h2 className="widget-title">Pages</h2>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Shop</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="hss">
            <div className="footer-box subscribe">
              <h2 className="widget-title">Subscribe</h2>
              <p>Subscribe to our mailing list to get the latest updates.</p>
              <form action="index.html">
                <input type="email" placeholder="Email" />
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyrights © 2024 - Veerpratap Singh , All Rights Reserved.
          Distributed By - ZS
        </p>
      </div>
    </div>
  );
};

export default Footer;

