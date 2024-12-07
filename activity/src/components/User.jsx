import React from 'react'

const User = ({username, color}) => {
  return (
    <div>
        <h3 style={{color:color}}>{username}</h3>
    </div>
  )
}

export default User