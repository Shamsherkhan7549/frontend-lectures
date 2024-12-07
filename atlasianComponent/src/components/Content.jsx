import React from 'react'
import Title from './Title'
import Description from './Description'
const Content = ({title, description}) => {
    const contentStyle = { 
     display:'flex',
     flexDirection:'column',
     alignItems:'start',
     gap:'0px'
    }
    
    const features = ['hi-tech', 'durable', 'fast'];
    const features2 = {
      a: 'HI-Tech',
      b:'fast',
      c:'durable'
    }
  return (
    <div style={contentStyle}>
        <Title title={title}/>
        <Description description={description} features={features} features2={features2} />
    </div>
  )
}

export default Content
