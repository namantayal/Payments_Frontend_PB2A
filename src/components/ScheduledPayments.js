import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import "./ScheduledPayments.css";

export default function ScheduledPayments() {

    const [email, setEmail] = useState("");

  return(
    <div className='MenuBar'>
        <h2 className='button'>Scheduled Payments</h2>
        
        <Form className="form" >
        <Form.Group size="lg" controlId="email">
          <Form.Label className="labelEmail">biller code</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           </Form.Group>       
        </Form>
    </div>

  );

}