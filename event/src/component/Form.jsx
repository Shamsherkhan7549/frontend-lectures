import React from 'react';
import { useState } from 'react';

const Form = () => {

    function init(){
        console.log('init ')
        return Math.random()
    }

    const [value, setValue] = useState("");
    const [count, setCount] = useState(init);
    const [like, setLike] = useState(false);

    console.log("count rendered");

    const handlingInputChange = (event) => {
        setValue(event.target.value);
    }

    const handlingSubmit = (event) => {
        event.preventDefault();
        console.log(value);
        setValue("");
        console.log('form submitted')
    }

    const hanlingCount = () => {
        setCount(count=> count+1);
        setCount(count=> count+1);

        // setCount(25)

    }

    const handlingLike = () => {
        // if(like === false){
        //     setLike(true);
        // }else{
        //     setLike(false)
        // }

        like ? setLike(false):setLike(true);
    }

 return (
    <>
        <h2>State in React</h2>
        <form onSubmit={handlingSubmit}>
            <input type="text" placeholder='username' value={value} onChange={handlingInputChange}/>
            <button>submit</button>
        </form> <br />

        <button onClick={hanlingCount}>count: {count}</button>

        <h3>like button</h3>
        <p style={{fontSize:'2rem'}} onClick={handlingLike}> {like ? <i className="fa-solid fa-heart" style={{color: "#ff0000"}}></i>:<i className="fa-regular fa-heart"></i>} </p>
    </>
  )
}
     
export default Form