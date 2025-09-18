import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; 
import "./Home.css";
import heroImg from "./PhotoRoom-20250716_211156.png";
import resume from "./JAGDISH_RESUME.pdf";
import aimg from "./photo.png";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Text */}
            <Col sm={6} className="animate__animated animate__fadeInLeft">
              <h2>Hi,</h2>
              <h2>My name is Jagdish Shinde</h2>
              <h1 style={{ color: "#9130ffff" }}>I am a Full Stack Developer.</h1>

              {/* Resume Button */}
             

              {/* Social Links */}
              <div className="mt-1">
                <a
                  href="https://github.com/Jagdish1214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <FaGithub className="text-primary" size={24} />
                </a>

                <a
                  href="www.linkedin.com/in/jagdish-shinde-63a82b36b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <FaLinkedin className="text-info" size={24} />
                </a>

                <a
                  href="https://www.instagram.com/jagdish_shindee?igsh=cTdzOTNtbGtkOHp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <FaInstagram className="text-danger" size={24} />
                </a>

                <a href={resume} download className="btn  mt-3">
                <i className="bi bi-download me-1"></i> Download Resume
              </a>
              </div>
            </Col>

            {/* Right Side - Image */}
            <Col sm={6} className="animate__animated animate__fadeInRight text-center">
              <img src={heroImg} className="img-fluid coder-img" alt="coder-img" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section mt-5">
        <Container className="text-center">
          <h2 className="section-title mt-4">👨🏻‍💻 About Me</h2>
          <p className="about-text px-4">
            <strong>My name is Jagdish Shinde</strong>. I have completed my
            Bachelor's degree in Computer Science from Mit ACSC, Alandi. I am a
            Fresher and currently pursuing my Masters in Full Stack Java
            Development at IT Vedant. I have hands-on knowledge of programming
            languages like Java, Python, C Programming, frontend technologies like
            HTML, CSS, Bootstrap, and for databases I have hands-on knowledge in
            PostgreSQL.  
            <br /><br />
            I also made a small project called <strong>Laundry Management System</strong>,
            which helped me understand how websites are built.  
            <br /><br />
            One of my strengths is that I'm a quick learner, detail-oriented, and
            always try to complete my work on time. I also work well in team
            environments and enjoy collaborating with others to achieve common
            goals.  
            <br /><br />
            In the future, I want to work as a Full Stack Developer in a reputed
            organization where I can gain knowledge and build my career in the IT
            industry.  
            <br /><br />
            That's all about me. Thank you!!!
          </p>
        </Container>
      </section>
    </>
  );
}

export default Home;

