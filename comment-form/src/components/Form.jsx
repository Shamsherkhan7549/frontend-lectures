import React from 'react'
import { useState } from 'react';
const Form = ({AddNewComments}) => {

    const [formData, setFormData] = useState(

        {   
            username:"",
            remarks:"",
            rating:5
        }
    );

    const handlingInputChange = (event) => {
        setFormData((newFormData) => {
            return{...newFormData, [event.target.name]:event.target.value};
        });
    };

    const handlingSubmit = (event) => {
        event.preventDefault();
        AddNewComments(formData);
        
        setFormData(
            {
                username:"",
                remarks:"",
                rating:5
            }
        )
    }

  return (
    <div>
        <form action="" onSubmit={handlingSubmit}>
            <label htmlFor="username"></label>
            <input type="text" id='username' name='username'  value={formData.username} placeholder='Enter Username' onChange={handlingInputChange} /> <br /> <br />

            <label htmlFor="username"></label>
            <textarea type="text" cols={21} rows={10} id='remarks' name='remarks' value={formData.remarks} placeholder='Enter Username' onChange={handlingInputChange}/> <br /> <br />

            <label htmlFor="username"></label>
            <input type="number" id='rating' name='rating' max={5} min={1} value={formData.rating} placeholder='Enter Username' onChange={handlingInputChange}/> <br /> <br />

            <button>Add Comments</button>
        </form>
    </div>
  )
}

export default Form