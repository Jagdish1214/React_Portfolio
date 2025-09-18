import React, { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
    const form = useRef();
    const[name,setName] =useState("");
    const[email,setEmail] =useState("");
    const[message,setMessage] =useState("");

    const sendEmail = (e) => {
    e.preventDefault();

    const templateParams={
        from_name:name,
        from_email:email,
        message:message,
        to_email:"jagdishshinde362@gmail.com",
    };

    emailjs
        .sendForm(
            "service_xsft0yl",
            "template_i71e4qh",
            form.current,
            "z2u6y3xDYdY6KwQ5T",
            templateParams,
        )
        .then(
            (result) => {
            console.log(result.text);
            alert("✅ Message sent successfully!");
            },
            (error) => {
            console.log(error.text);
            alert("❌ Failed to send message. Try again.");
            }
        );

     e.target.reset(); // clear form after submit
    };

    return (
        <Container className="mt-5">
        <h2 className="section-title">📭 Contact Me</h2>
        <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"  placeholder="Enter your name" required   name="from_name" onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="from_email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" required />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" onChange={(e)=>setMessage(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit">Send</Button>
        </Form>
        </Container>
    );
}

export default Contact;
