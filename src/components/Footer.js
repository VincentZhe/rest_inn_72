import React from "react";
import { ReactComponent as Logo } from "../assets/image/brand.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-left">
          <Link to="/">
            <Logo className="footer-logo" />
          </Link>

          <p className="footer-desc">
            {" "}
            72 Resort Inn Inc. provides wonderful room booking services for your
            trips !
          </p>
          <div className="footer-socialContainer">
            <div className="footer-socialIcons">
              <FaFacebookF />
            </div>
            <div className="footer-socialIcons">
              <FaInstagram />
            </div>
            <div className="footer-socialIcons">
              <FaTwitter />
            </div>
            <div className="footer-socialIcons">
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className="footer-center">
          <h3 className="footer-title">Useful Link</h3>
          <ul className="footer-list">
            <li className="footer-listItem">Car rental</li>
            <li className="footer-listItem">Flight finder</li>
            <li className="footer-listItem">Restaurant</li>
            <li className="footer-listItem">Travel Agents</li>
            <li className="footer-listItem">Discover</li>
            <li className="footer-listItem">Reviews</li>
            <li className="footer-listItem">All destinations</li>
            <li className="footer-listItem">Travel communities</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3 className="footer-title">About 72 Resort Inn Inc.</h3>
          <ul className="footer-list">
            <li className="footer-listItem">About us</li>
            <li className="footer-listItem">Terms</li>
            <li className="footer-listItem">Contact us</li>
            <li className="footer-listItem">Careers</li>
            <li className="footer-listItem">Press center</li>
            <li className="footer-listItem">Investor</li>
            <li className="footer-listItem">Privacy</li>
            <li className="footer-listItem">Sustainability</li>
          </ul>
        </div>
      </footer>

      <p className="footer-baselineText">&copy; 2022 72 Resort Inn Inc.</p>
    </>
  );
};

export default Footer;
