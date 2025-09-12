import React from "react";
import {Link,Outlet} from "react-router-dom";
import {Container,Nav} from "react-bootstrap";
import "./Qualification.css";
function Qualification()
{
    return(
        <Container className="mt-5">
        <h2 className="section-title">🎓Qualifications</h2>
        {/*Navigation fro child routes*/}
        
        <Nav variant="tabs" defaultActiveKey="/qualification/education">
            <Nav.Item>
                <Nav.Link as={Link} to="education" className="custom-nav-link">
                    Education
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to="experience" className="custom-nav-link">
                    Experience
                </Nav.Link>
            </Nav.Item>
        </Nav>

        {/*Child route content will render here */ }
        <Outlet />
        </Container>
    );
}
export default Qualification;