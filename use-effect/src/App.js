import logo from './logo.svg';
import './App.css';
import Couter from "./components/counter"
import { useState } from 'react';


function App() {

  const [isVisible,setVisible]=useState(true)

  return (
    <div >
      {/* if else yapısı */}
      {isVisible && < Couter/>}
      <button onClick={()=>setVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
