import React from "react";
import {Form,Button,Container} from "react-bootstrap";
function Signup()
{
    return(
        <Container className="mt-5">
                    <h2 className="section-title" >📋Signup</h2>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="enter your email" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="enter your password " />
                        </Form.Group>
        
                        <Button variant="success" >Signup</Button>
                    </Form>
                </Container>
    )
    
}
export default Signup;