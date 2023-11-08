import React from 'react'
import './style.css'


function List({todoItem,addTodo}) {
    
  return (
    <div>
      {/*Burada yaptığımız işlem sayesinde bir liste içerisinde elemanların listede gösterilmesi işlemi yapılmıştır.  */}
      <ul>
        {todoItem.map((todo,index) => <li key={index  }>{todo} </li>)}
      </ul>
    </div>
  )
}

export default List
