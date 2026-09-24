// app/components/Footer.js
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import './styles/footer.css';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Subscribe to get the Latest News</h2>
        <p>Don’t miss out on our latest news, updates, tips and special offers</p>
        <div className="input-container">
          <input type="email" placeholder="Enter your Email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-section">
          <h3>Bean Scene</h3>
          <p>
            Our customers have amazing things to say about us — real coffee is
            greater. There is no doubt that you will enjoy this coffee more than
            others you have ever tasted.
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><IoLogoWhatsapp /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>Menu</li>
            <li>Features</li>
            <li>News and Blogs</li>
            <li>Help and Support</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>How we work</li>
            <li>Terms of service</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
          </p>
          <p>+1 202-918-2132</p>
          <p>beanscene@mail.com</p>
          <p>www.beanscene.com</p>
        </div>
      </div>
    </footer>
  );
}
