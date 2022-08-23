import React from 'react';
import "./DashboardManager.css";

export default function DashboardManager() {

  return(
    <div className='MenuBar'>
        <button className='button'>Dashboard</button>
        <button className='button'>Delete Registered Biller</button>
        <button className='button'>View Registered Biller</button>
        <button className='button'>Add New Biller</button>
        <button className='button'>View Scheduled Payments</button>
        <button className='button'>Manual Payments</button>
        <button className='button'>View Payments done for a payment biller </button>
        <button className='button'> export file to csv</button>
    </div>

  );

}