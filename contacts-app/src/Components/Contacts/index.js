import React from 'react'
import List from "./List/index"
import Form from './Form/index'
import { useState,useEffect } from 'react'

function Contexts() {
    const [contac,addContact]=useState([]);

    // useEffect(() => {
    //     console.log(contac);
    // },[contac])


  return (
    <div>
        <h1>Contaxts</h1>
        <List contac={contac}/>
        <Form addContact={addContact} contact={contac}/>
        
    </div>
  )
}

export default Contexts
