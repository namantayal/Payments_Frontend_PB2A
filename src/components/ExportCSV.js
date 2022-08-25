import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import "./ExportCSV.css"
import Button from "react-bootstrap/Button";

export default function ExportCSV() {

    const [email, setEmail] = useState("");
  return(
    <div className='MenuBar'>
        <h2 className='button'>Export CSV</h2>

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
        <Button className="button" block size="lg" type="submit"  >
          export csv files
        </Button>
        </Form>
    </div>

  );

}