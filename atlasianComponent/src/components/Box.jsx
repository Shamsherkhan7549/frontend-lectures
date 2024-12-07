import React from 'react';
import Image from './Image';
import Content from './Content';
import './Box.css'

const Box = ({title, description,image}) => {
    const Box = {
        display:'flex',
        alignItems:'center',
        gap:"20px",
        backgroundColor:"lightBlue",
        padding:"0 30px",
        borderRadius:"7px",
        
      }
  return (
    <div style={Box} className='Box'>
        <Image image={image}/>
        <Content title={title} description={description}/>
      </div> 
  )
}

export default Box