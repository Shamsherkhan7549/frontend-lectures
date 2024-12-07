import React from 'react'
import './Product.css'
const Product = ({name, price}) => {
  const isDicount = price >= 15000;
  const style = {backgroundColor: isDicount ? "yellow" : ""}
  return (
    <div className='Product' style={style}>
        <h3>Name: {name}</h3>
        <p>Price: {price}</p>
         {isDicount && <p>Discount: 10% </p>}
    </div>
  )
}

export default Product