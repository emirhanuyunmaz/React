import { useState } from "react";


function Counter(){
    const[count,setCount]=useState(0)

    const desc=()=>{
        setCount(count-1)
    }

    const insc=()=>{
        setCount(count+1)
    }

    return(

        <div>
            <h1>{count}</h1>
            <button onClick={desc}>-</button>
            <button onClick={insc}>+</button>

        </div>

    )

}

export default Counter;
