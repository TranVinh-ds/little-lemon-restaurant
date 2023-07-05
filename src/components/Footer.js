import React from 'react';
import lemonLogo from '../icons_assets/Logo.svg';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" footer-center">
      <div className="footer-container">
        <img src={lemonLogo} alt="logo" className="footer-logo" />
        <div className="footer-contact">
          <h3>contact</h3>
          <p>address</p>
          <p>phone</p>
          <p>email</p>
        </div>
        <ul className="social-links">
          <li>
            <a href="https://facebook.com">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://github.com">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
