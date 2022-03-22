import React from 'react';
import ReactModal from '../ReactModal/ReactModal';

const SingleProduct = (props) => {
    const {title,image} = props.product
    return (
        <div className='col-lg-4'>
       <div className="card border p-3">
       <img width={150} src={image} alt="" />
       <h4>{title.slice(0,10)}</h4>
       
           <div className='d-flex justify-content-arround'>
           <button onClick={props.setCartCount} className='btn btn-primary'>AddtoCart</button> 
           <button className='btn btn-danger'>Delete</button> 
            <ReactModal product = {props.product}></ReactModal>
               </div> 
       </div>
        </div>
    );
};

export default SingleProduct;