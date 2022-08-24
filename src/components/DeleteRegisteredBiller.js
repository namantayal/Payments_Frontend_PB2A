
import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import "./DeleteRegisteredBiller.css";

export default function DeleteRegisteredBiller() {
    const [code, setCode] = useState("");
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
        </Form>
    </div>

  );

}