import React from "react";
import { Link } from "react-router-dom";
import {Navbar,Nav,Container} from "react-bootstrap"
import "./Navbar.css";

function NavbarComp()
{
    return(
        <Navbar expand="lg" className="navbar-custom sticky-top bg-dark" variant="dark" >
            <Container>
                <Navbar.Brand as={Link} to="/" >Jagdish</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" ></Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav" className="justify-content-end" >
                    <Nav>
                        <Nav.Link as={Link} to="/" >About Me</Nav.Link>
                        <Nav.Link as={Link} to="/qualification/education" >Qualification</Nav.Link>
                        <Nav.Link as={Link} to="/skills" >Skills</Nav.Link>
                        <Nav.Link as={Link} to="/project" >Project</Nav.Link>
                        <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
}
export default NavbarComp;