import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const CommentForm = () => {

    const [comments, setComments] = useState([]);

    const [formData, setFormData] = useState(
        {
            id:uuidv4(),
            username: "",
            remarks:"",
            ratings:5
        },
    );

    const hanlingInputChange = (event) =>{
        setFormData(prevFormdData => {
            return {...formData, [event.target.name]:event.target.value }
        });
    }; 

    const handlingSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setComments(prevComments => {
            return[...comments, {...formData, id:uuidv4()}]
        });

        setFormData({
            username:"",
            remarks:"",
            ratings:""
        })
        console.log(comments)
    }




  return (
    <div>

        <form action="" onSubmit={handlingSubmit}>
        <label htmlFor="username">Username</label> <br />
            <input type="text" id='username' placeholder='enter username' name='username' value={formData.username}  onChange={hanlingInputChange} required/> <br /><br />
            
        <label htmlFor="remarks">Remarks</label> <br />
            <textarea cols={21}  rows={10} type="text" id='remarks' placeholder='enter remarks' name='remarks' value={formData.remarks} onChange={hanlingInputChange} required/> <br /><br />
           
        <label htmlFor="ratings">Ratings</label> <br />
            <input type="number" id='ratings' placeholder='give ratings' name='ratings' value={formData.ratings} max={5} min={1} onChange={hanlingInputChange} required/> <br /><br />
            
            <button>submit</button>
        </form>

        <div>
            {comments.map((comment,key) => 
                <p key={comment.id}><b><i>@{comment.username}</i></b> <br />
                {comment.remarks} ({comment.ratings})
             </p>
            )}
        </div>
        
    </div>
  )
}

export default CommentForm