import React from 'react'
import { useState,useEffect } from 'react'


function Counter() {

    const [count,setCount]=useState(0)

    const inscCount=()=>{
        return setCount((n)=>n+1)
    }

    


    useEffect(()=>{
        console.log("number mount edildi");
        //Her belirlenen sürede çalışan bir yapı
        const interval = setInterval(()=>{
        setCount((n)=>n+1)
    },1000)

    //Burada yapılan işlem sayesinde gözükmeyen öğeler için arttırma işlemi yapmayacaktır
    return ()=> clearInterval(interval)
    },[count])//Köşeli parantezler içersinde belirtilen değişken takip edilecek olan değişkendir.


  return (
    <div>
        <h3>{count}</h3>
        <button onClick={inscCount}>Insc</button>
    </div>
  )
}

export default Counter
