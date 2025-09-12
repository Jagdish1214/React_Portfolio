import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container className="text-center">
        {/* Social Links */}
        <div className="social-links mb-3">
          <a
            href="https://www.facebook.com/share/16mUZjtNTR/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} className="text-primary" />
          </a>

          <a
            href="https://www.linkedin.com/in/jagdish-shinde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="text-info" />
          </a>

          <a
            href="https://www.instagram.com/jagdish_shindee?igsh=cTdzOTNtbGtkOHp4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} className="text-danger" />
          </a>

          <a href="mailto:jagdishshinde@example.com">
            <FaEnvelope size={24} className="text-warning" />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} Jagdish Shinde | All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
