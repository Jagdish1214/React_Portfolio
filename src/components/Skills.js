import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";

// Import all your logos (put them inside src/assets or src/icons)
import htmlLogo from "./html-logo.png";
import cssLogo from "./css-logo.png";
import bootstrapLogo from "./bootstrap5logo.png";
import jsLogo from "./javascript-logo.png";
import javaLogo from "./java-logo-png.png";
import pythonLogo from "./python-logo-png.png";
import postgresLogo from "./postgresqllogo.png";
import phpLogo from "./php-logo.png";

function Skills() {
  return (
    <section id="skills" className="section p-5">
      <h2
        className="display-5 fw-bold"
        style={{ color: "#007bff", textAlign: "center" }}
      >
        🛠 Skills
      </h2>

      <Container className="gap-2 mt-5 d-flex flex-column align-items-center justify-content-center">
        {/* Row 1 */}
        <Row className="mb-4">
          <Col md={3} className="mb-4">
            <Card className="skill-card">
              <Card.Img variant="top" src={htmlLogo} alt="HTML" />
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="skill-card">
              <Card.Img variant="top" src={cssLogo} alt="CSS" />
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="skill-card">
              <Card.Img variant="top" src={bootstrapLogo} alt="Bootstrap" />
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="skill-card">
              <Card.Img variant="top" src={jsLogo} alt="JavaScript" />
            </Card>
          </Col>
        </Row>

        {/* Row 2 */}
        <Row>
          <Col md={3} className="mb-4">
            <Card className="skill-card">
              <Card.Img variant="top" src={javaLogo} alt="Java" />
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="skill-card">
              <Card.Img variant="top" src={pythonLogo} alt="Python" />
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="skill-card">
              <Card.Img variant="top" src={postgresLogo} alt="PostgreSQL" />
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card className="skill-card">
              <Card.Img variant="top" src={phpLogo} alt="PHP" />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
