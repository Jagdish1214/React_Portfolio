import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container className="text-center">
        {/* Social Links */}
        <div className="social-links mb-3">
          <a
            href="https://github.com/Jagdish1214"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="text-primary" />
          </a>

          <a
            href="www.linkedin.com/in/jagdish-shinde-63a82b36b"
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
