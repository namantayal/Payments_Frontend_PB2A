
import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import "./DeleteRegisteredBiller.css";

import Button from "react-bootstrap/Button";

export default function DeleteRegisteredBiller() {
    const [code, setCode] = useState("");

    function validateForm() {
      return code.length > 0 ;
    }
  return(
    <div className='MenuBar'>
        <h2 className='button'>Delete Registered Biller</h2>
        
        <Form className="form" >
        <Form.Group size="lg" controlId="code">
          <Form.Label className="code">Biller Code</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

        </Form.Group>
        <Button className="button" block size="lg" type="submit" disabled={!validateForm()} >
          Delete Biller
        </Button>
        </Form>
    </div>

  );

}