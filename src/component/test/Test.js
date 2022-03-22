import React, { useState } from 'react';

const Test = ({number}) => {
    // console.log(number)


    const [count, setCount] = useState(0);
 

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count +1 )} className='p-5'>+</button>
            <button onClick={()=>setCount(count -1 )} className='p-5 m-3'>-</button>
        </div>
    );
};

export default Test;