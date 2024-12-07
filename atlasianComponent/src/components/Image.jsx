import React from 'react'

const Image = ({image}) => {
  return (
    <img style={{height:'50px', width:'50px', borderRadius:"3px"}} src= {image} alt="logo"/>
  )
}

export default Image