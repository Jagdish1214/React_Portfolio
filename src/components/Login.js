import React from "react";
import {Form,Button,Container} from "react-bootstrap";
function Login()
{
    return(
        <Container className="mt-5">
                            <h2 className="section-title" >🔑Login</h2>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="enter your email" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="enter your password " />
                                </Form.Group>
                
                                <Button variant="primary" >Login</Button>
                            </Form>
                        </Container>
    )
    
}
export default Login;