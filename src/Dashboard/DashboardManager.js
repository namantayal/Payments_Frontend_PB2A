import React,{useState} from 'react';
import "./DashboardManager.css";
import bg from "../Dashboard/bg.png";
import CreateNewBill from '../components/CreateNewBill';

export default function DashboardManager() {
  const [id, setID] = useState("");
  const mystyle={
    backgroundImage: `url(${bg})`,

  }
  return(
  <div>
    <div className='MenuBar'>
        <h2 className='button'>Dashboard</h2>
        <button className='button' onClick={()=>setID(1)}>Create new bill</button>
        
    </div>
    <div style={mystyle}>
    {id===1&&<CreateNewBill/>} 
    
    </div>
</div>

  );

}