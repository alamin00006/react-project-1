import React from 'react';
import './Menuver.css'
const Menuver = (props) => {
    return (
        <div>
           <div className="container">
               <div className="row">
               <div className="col-lg-2">
                   <h1>Logo</h1>
               </div>
               <div className="col-lg-10 list d-flex justify-content-end">
                   <li className='fs-5 ms-5 p-3'>Home</li>
                   <li className='fs-5 ms-5 p-3'>Contact</li>
                   <li className='fs-5 ms-5 p-3'>Cart <sup>{props.count}</sup> </li>
                   <li className='fs-5 ms-5 p-3'>Login</li>
                   
               </div>
               </div>
           </div>
        </div>
    );
};

export default Menuver;