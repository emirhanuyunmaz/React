import './App.css';
import List from './components/List';
import Input from './components/Input'
import { useState,useEffect } from 'react';

function App() {

  const [todoItem,addTodo]=useState([])
  const [inputText,setInputText]=useState("")

  const onChanges= (event) => {
    setInputText(event.target.value)
    console.log(inputText)
  }

  const onSubmit = () => {
    addTodo([inputText,...todoItem])
  }


  return (
    <div className="App">
      <Input todoItem={todoItem} addTodo={addTodo}/>
      <List todoItem={todoItem} addTodo={addTodo}/>
    </div>
  );
}

export default App;
