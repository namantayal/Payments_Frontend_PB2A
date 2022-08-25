import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import "./CreateNewBill.css";

export default function CreateNewBill() {

    const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  return(
    <div className='MenuBar'>
        <h2 className='button'>Create new bill</h2>
        
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
          <Form.Label className="label">Amount </Form.Label>
          <Form.Control
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        </Form>
    </div>

  );

}