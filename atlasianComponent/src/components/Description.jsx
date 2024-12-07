import React from 'react'

const Description = ({description,features, features2}) => {
  return (
   <div>
     <p style={{fontSize:"13px"}}> {description}</p>
     <ul>
      {features.map(item=> <li>{item}</li>)}
     </ul>
     <p>{features2.b}</p>
   </div>
  )
}

export default Description