import React from 'react';
import Form from "react-bootstrap/Form";
import "./ViewRegisteredBills.css"
import Button from "react-bootstrap/Button";

export default function ViewRegisteredBills() {

  return(
    <div className='MenuBar'>
        <h2 className='button'>View Registered Bills</h2>

        <Form className="form" >
        
        <Button className="button" block size="lg" type="submit"  >
          View registered users
        </Button>
        </Form>
    </div>

  );

}