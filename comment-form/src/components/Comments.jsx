import React, { useState } from 'react'
import Form from './Form';
import FormicForm from './FormicForm';
const Comments = () => {

  const [comments, setComments] = useState([
    {
      username:"shamser",
      remarks:"nice place, must visit.",
      rating:5
    }
  ]);

  const AddNewComments = (newComment) => {
    setComments(prevComment =>{
      return [...prevComment, newComment]
    });
  }

  return (
    <div>

      <FormicForm AddNewComments = {AddNewComments}/>
        <h2>All Comments</h2>
        <hr />

        {
          comments.map((comment)=> <div>
            <p>@{comment.username} <br />
              remarks: {comment.remarks} ({comment.rating})
            </p>
          </div> )
        }
    </div>
  )
}

export default Comments