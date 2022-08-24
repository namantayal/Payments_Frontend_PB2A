
import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import "./AddNewBiller.css";

export default function AddNewBiller() {

    const [Cnumber, setCnumber] = useState("");
  const [autoPayLimit, setAutoPayLimit] = useState("");
  const [autoPayAllowed, setAutoPayAllowed] = useState(true);

  return(
    <div >
        <h2 >Add New Biller</h2>
        
        <Form className="form" >
        <Form.Group size="lg" controlId="cnumber">
          <Form.Label className="label">Consumer Number</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={Cnumber}
            onChange={(e) => setCnumber(e.target.value)}
          />
        </Form.Group>
        <Form.Label className="label">Auto Pay Allowed</Form.Label>
        <div key="radio">
          <Form.Check 
          inline
            type="radio"
            id="YES"            
            label="YES"
            onChange={(e) => setAutoPayAllowed("yes")}
          />

          <Form.Check
          inline
            type="radio"
            label="NO"
            id="NO"
            onChange={(e) => setAutoPayAllowed("no")}
          />
        </div>   
       
        <Form.Group size="lg" controlId="autoPayLimit">
          <Form.Label className="label">Auto Pay Limit</Form.Label>
          <Form.Control
            type="password"
            value={autoPayLimit}
            onChange={(e) => setAutoPayLimit(e.target.value)}
          />
        </Form.Group>
        </Form>
    </div>

  );

}