import React, { useState } from 'react';
import AddNewBiller from '../components/AddNewBiller';
import DeleteRegisteredBiller from '../components/DeleteRegisteredBiller';
import ExportCSV from '../components/ExportCSV';
import ManualPayments from '../components/ManualPayments';
import ParticularBiller from '../components/ParticularBiller';
import ScheduledPayments from '../components/ScheduledPayments';
import ViewRegisteredBills from '../components/ViewRegisteredBills';
import bg from "../Dashboard/bg.png";

export default function DashboardUser() {
  const [id, setID] = useState("");
  const mystyle={
    backgroundImage: `url(${bg})`,

  }
  return(
<div>
 <div className='MenuBar'>
    <h2 className='button'>Dashboard</h2>
    <button onClick={()=>setID(1)} className='button'>Delete Registered Biller</button>
    <button onClick={()=>setID(2)} className='button'>View Registered Biller</button>
    <button onClick={()=>setID(3)} className='button'>Add New Biller</button>
    <button onClick={()=>setID(4)} className='button'>View Scheduled Payments</button>
    <button onClick={()=>setID(5)} className='button'>Manual Payments</button>
    <button onClick={()=>setID(6)} className='button'>View Payments done for a particular biller </button>
    <button onClick={()=>setID(7)} className='button'>Export file to csv</button>
</div>
<div style={mystyle}>
    {id===4&&<ScheduledPayments/>} 
    {id===2&&<ViewRegisteredBills/>}
    {id===3&&<AddNewBiller/>}
    {id===1&&<DeleteRegisteredBiller/>}
    {id===5&&<ManualPayments/>}
    {id===6&&<ParticularBiller/>}  
    {id===7&&<ExportCSV/>}
    </div>
</div>

  );

}