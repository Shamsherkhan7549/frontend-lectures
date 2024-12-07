import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './Todo.css';

const Todo = () => {

    const [task, setTask] = useState("");

    let [tasks, setTasks] = useState([
        {   
            id: uuidv4(),
            task:"read",
            isComplete: false
        },
        {   
            id: uuidv4(),
            task:"write",
            isComplete: false
        },
    ]);

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setTasks((currTask) =>{
            return [...tasks, {id: uuidv4(), task: task,  isComplete: false}];
           
        });
        setTask("");
    };

    const handlingDelete = (id) => {
        tasks = tasks.filter(task => task.id != id);
        console.log(tasks)
        setTasks([...tasks]);
    };


    const handlingComplete = (id) =>{
        const data = tasks.find(task => id === task.id);

        if(data.id === id && data.isComplete === true){
             data.isComplete = false;
        }else{
           data.isComplete = true
        }

        
        setTasks((prevTasks) => [...prevTasks])
        console.log(tasks)
        
    };
    
    const handlingUpdate = (id) => {
        const data = tasks.find(task => task.id === id);
        try{
            const updatedData = prompt(`update task: ${data.task}`);
            data.task = updatedData;
            console.log(data.task);
            setTasks(prevTasks => [...prevTasks]);
        }catch(err){
            console.log("please refress")
        };

      
    }

  return (
    <div className='Todo'>
            <form action="" onSubmit={handleSubmit} className='form'>
                <input type="text" placeholder='enter task' onChange={handleInputChange}  value={task} required/> <button>Add</button>
            </form> <br /> <br />


            <table width={"60%"}>
               <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>update</th>
                        <th>complete</th>
                        <th>delete</th>
                    </tr>
               </thead>

                {
                    tasks.map(task =>    
                    <tbody style={{textAlign:'center'}}>
                        <tr key={task.id} className={task.isComplete ? "completed" : "incomplete"}>
                        <td>{task.task.toLowerCase()}</td>
                        <td onClick={()=>handlingUpdate(task.id)} style={{cursor:'pointer'}}>update</td>
                        <td onClick={()=>handlingComplete(task.id)} style={{cursor:'pointer'}}>{task.isComplete ? "completed" : "complete ?"}</td>
                        <td onClick={()=>handlingDelete(task.id)} style={{cursor:'pointer'}}>delete</td>
                   
                    </tr>
                    </tbody>
                    )
                }

            </table>            
    </div>
  )
}

export default Todo