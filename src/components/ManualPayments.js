import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import "./ManualPayments.css";
import Button from "react-bootstrap/Button";

export default function ManualPayments() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length>0 ;
  }

  return(
    <div className='MenuBar'>
        <h2 className='button'>Manual Payments</h2>
        
        <Form className="form" >
        <Form.Group size="lg" controlId="text">
          <Form.Label className="labelEmail">Account no.</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

        </Form.Group>
        <Form.Group size="lg" controlId="number">
          <Form.Label className="label">Amount</Form.Label>
          <Form.Control
            type="number"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="button" block size="lg" type="submit" disabled={!validateForm()} >
          Make Payment
        </Button>
        </Form>
    </div>

  );

}
