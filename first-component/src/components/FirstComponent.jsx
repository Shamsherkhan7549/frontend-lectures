import React from 'react'
import Button from './Button';
 const MyButton = () => {
  return (
    
    <>
        <button>button</button>
    </>
  )
};

const FirstComponent = () => {
  return (
    <div>
        <h1>Welcome to react</h1>
        <MyButton/>  
        <Button/> 
    </div>
  )
}

export default FirstComponent