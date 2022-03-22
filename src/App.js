import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Allproduct from './component/Allproduct/Allproduct';
import Menuver from './component/menuver/Menuver';
// import Test from './component/test/Test';

function App() {
const [count, setCount] = useState(0);

const setCartCount = ()=>{
  setCount(count+1);
}
  return (
    <div className="App">
   <Menuver count ={count}></Menuver>
    <Allproduct setCartCount = {setCartCount}></Allproduct>
    </div>
  );
}

export default App;
