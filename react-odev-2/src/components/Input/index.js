import React, { useState } from 'react'

function Input({todoItem,addTodo}) {

    const [inputText,setInputText]=useState("")
    const add=()=>{
        return console.log(inputText)
        //return addToDo([...todoList,inputText])
      }

      const onSubmit = () => {
        console.log(inputText)
        addTodo([inputText,...todoItem])
      }

        //Burada inputa her işlem yapıldığında çalışan bir yapı var 
      const onChanges = (e) => {
        setInputText(e.target.value)
        console.log(e.target.value)
      }

  return (
    <div>
        <input name='todo' onChange={onChanges}/>
      <button onClick={onSubmit} >Add</button>
    </div>
  )
}

export default Input
