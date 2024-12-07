import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Enter Username!';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
  
    if (!values.remark) {
      errors.remark = 'Enter Remarks.';
    } else if (values.remark.length > 20) {
      errors.remark = 'Must be 20 characters or less';
    }
  
    if (!values.rating) {
        errors.rating = 'Give Some Rating';
     } 
  
    return errors;
  };
  

const FormicForm = ({AddNewComments}) => {
    const formik = useFormik({
        initialValues: {
          username: '',
          remark: '',
          rating: 5,
        },
        validate,
        onSubmit: values => {
            AddNewComments(values)
        },
      });


      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="username">Username</label> <br />
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          /> <br /> 
         {formik.errors.username ? <p style={{color:'red'}}>{formik.errors.username}</p> : null}  
    
          <label htmlFor="remark">Remarks</label> <br />
          <textarea
            cols={21}
            rows={10}
            id="remark"
            name="remark"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.remark}
          /> <br />
         {formik.errors.remark ? <p style={{color:'red'}}>{formik.errors.remark}</p> : null}  
    
          <label htmlFor="rating">Rating</label> <br /> 
          <input
            id="rating"
            name="rating"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.rating}
          /> <br /> <br />
         {formik.errors.rating ? <p style={{color:'red'}}>{formik.errors.rating}</p> : null}  
    
          <button type="submit">Submit</button>
        </form>
      );
}

export default FormicForm