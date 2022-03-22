import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Allproduct.css'

const Allproduct = (props) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])

    return (
        <div>
        <div className="row">
        {
             products.map(pd => <SingleProduct product= {pd} key ={pd.id} setCartCount = {props.setCartCount}></SingleProduct>)
         }
        </div>
        </div>
    );
};

export default Allproduct;