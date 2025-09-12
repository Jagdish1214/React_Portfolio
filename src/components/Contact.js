import React from "react";
import {Form,Button,Container} from "react-bootstrap";
import "./Contact.css";

function Contact()
{
    return(
        <Container className="mt-5">
            <h2 className="section-title" >📭Contact Me</h2>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" >Send</Button>
            </Form>
        </Container>
    )
    
}
export default Contact;