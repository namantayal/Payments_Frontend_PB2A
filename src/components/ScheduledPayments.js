import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import "./ScheduledPayments.css";

export default function ScheduledPayments() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return(
    <div className='MenuBar'>
        <h2 className='button'>Scheduled Payments</h2>
        
        <Form className="form" >
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
        </Form>
    </div>

  );

}