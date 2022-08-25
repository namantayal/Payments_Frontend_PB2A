import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import "./ParticularBiller.css";

import Button from "react-bootstrap/Button";

export default function ParticularBiller() {

    const [code, setCode] = useState("");

    function validateForm() {
      return code.length > 0 ;
    }

  return(
    <div className='MenuBar'>
        <h2 className='button'>View payments done for particular biller</h2>
        
        <Form className="form" >
        <Form.Group size="lg" controlId="code">
          <Form.Label className="labelEmail">Biller Code</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

        </Form.Group>
        <Button className="button" block size="lg" type="submit" disabled={!validateForm()} >
          View Payments
        </Button>
        
        </Form>
    </div>

  );

}