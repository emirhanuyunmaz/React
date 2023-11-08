import { useState } from "react";


function InputExp(){
    //Bu tanımlamada her input için bir fonk. tanımlaması yapılması gerekiyor.
    //const [name , setName]=useState("")
    //Eğer bir object ve tek bir fonk işlemi ile yapmak istersek
    const [user , setUser]=useState({name:"",surname:""})

    const userChanges=(e)=>{
        //Buradaki veri sayesinde hangi input değerine giriş yapıldığı belirlenmektedir.
        console.log(e.target.name);
        setUser({...user,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <h4>Please Enter Name</h4>
            <input name="name" value={user.name} onChange={userChanges}/>
            <p>{user.name}</p>

            <br/>

            <h4>Please Enter Name</h4>
            <input name="surname" value={user.surname} onChange={userChanges}/>
            <p>{user.surname}</p>
        </div>
    )

}

export default InputExp;
