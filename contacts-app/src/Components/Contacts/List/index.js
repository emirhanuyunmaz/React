import React from 'react'

function List({contac}) {
  return (
    <div>
      <ul>
        {
            contac.map((c,i) => (
                
                <li key={i}>{c.fullName} {c.phoneNumber}</li>
            ))
        }
      </ul>
      
    </div>
  )
}

export default List
