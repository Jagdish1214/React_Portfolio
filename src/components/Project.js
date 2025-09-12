import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./Project.css";  // custom css for animation & styling

// Example images (replace with your project screenshots)
import project1 from "./img1.png";
import project2 from "./todoapp.png";

function Project() {
  return (
    <Container className="mt-5">
      <h2 className="section-title">💻 My Projects</h2>

      <Carousel fade interval={3000} className="project-carousel">
        {/* Project 1 */}
        <Carousel.Item>
           <img
            className="d-block w-100 project-img"
            src={project1}
            alt="Project 1"
          />
          <Carousel.Caption className="project-caption">
            <h3>Laundry Management System</h3>
            <p>
              A web app to manage laundry services – order placement, tracking, 
              and delivery management built using HTML, CSS, Bootstrap, and PHP.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Project 2 */}
        <Carousel.Item>
           <img
            className="d-block w-100 project-img"
            src={project2}
            alt="Project 2"
           /> 
          <Carousel.Caption className="project-caption">
            <h3>To-Do App</h3>
            <p>
              A simple task manager built with HTML,css,Bootstrap And Javascript, allowing 
              users to add, edit, delete, and track tasks with persistence.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Project;
