import React from 'react'
import { useState } from 'react';


function Form({addContact,contact}) {

    
    const [form,setForm]=useState({fullName:"",phoneNumber:""})

    const onChangeInput = (e)=> {
        setForm({...form , [e.target.name] : e.target.value})
    }

    const submit =(e) => {
        //e.preventDefault()
        if(form.fullName!="" && form.phoneNumber!=""){
            addContact([...contact,form])
            console.log(form)
            console.log(contact);
            
        }
    }

    //addContact([...contact,form])

  return (
    <div>
      <h2>Form </h2>

        <div>
            <input name='fullName' placeholder='Name' onChange={onChangeInput}/>
        </div>

        <div>
            <input name='phoneNumber' type='tel'  placeholder='Phone Number' onChange={onChangeInput}/>
        </div>

        <button onClick={submit}>Add</button>

    </div>
  )
}

export default Form;

