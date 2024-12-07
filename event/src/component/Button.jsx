import React from 'react'

const Button = () => {
    const submitHandler = () => {
        console.log('button clicked')
    }

    const handlingParagraph = () => {
        console.log('paragraph clicked')
    }

    const handligH3 = () => {
        console.log("h3 hovered")
    }

    const handlingH2 = () => {
        console.log("mouse leave from h2")
    }
  return (
   <div>
     <button onClick={submitHandler}>submit</button>
     <p onClick={handlingParagraph}> Hey ,  I am paragraph</p>
     <h3 onMouseOver={handligH3}>hey i am h3</h3>
     <h2 onMouseOut={handlingH2}>hey i am h2</h2>
   </div>
  )
}

export default Button