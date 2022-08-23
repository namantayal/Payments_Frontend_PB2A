import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // will use in authentication after API is ready

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  return (
    <div className="login">
      <h2 className="MainLabel">Payment Portal</h2>
      <Form className="form" onSubmit={()=>navigate('/dashboardM')}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="labelEmail">Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="button" block size="lg" type="submit" disabled={!validateForm()} >
          Login
        </Button>

      </Form>

    </div>

  );

}