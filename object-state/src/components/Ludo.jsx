import React, { useState } from 'react'
import './Ludo.css';

const Ludo = () => {

    const [moves, setMoves] = useState(
        {
            blue: 0,
            yellow: 0,
            green:0,
            red:0
        }
    );

    const [numbers, setNumbers] = useState([1,2,3,4,5]);

    const handlingBlue = () => {
        setMoves((currMove) => {
            return{
                ...moves, blue: moves.blue+1
            }
        })
    };

    const handlingYellow = () => {
        setMoves((currMove)=>{
            return{
                ...moves, yellow:moves.yellow+1
            }
        })
    };

    const handlingGreen = () => {
        setMoves(currMove => {
            return{
                ...moves, green: moves.green+1
            }
        })
    };

    const handlingRed = () => {
        setMoves(currMove => {
            return{
                ...moves, red: moves.red+1
            }
        })
    };

    const handlingArray = () => {
        // setNumbers((currNumbers) =>{
        //     return [...numbers, 1]
        // })

        numbers.push(Math.floor(Math.random()*10)+1);

        setNumbers((currNumber) => {
            return[...numbers]
        })
    }

  return (
    <>
    <div className='main'>
        <h2>Game begins</h2>
        <div>
            <h4>Blue moves: {moves.blue} </h4>
            <button className="blue" onClick={handlingBlue}>+1</button>
        </div>
        <div>
            <h4>Yellow moves: {moves.yellow} </h4>
            <button className="yellow" onClick={handlingYellow}>+1</button>

        </div>
        <div>
            <h4>Green moves: {moves.green} </h4>
            <button className="green" onClick={handlingGreen}>+1</button>

        </div>
        <div>
            <h4>Red moves: {moves.red} </h4>
            <button className="red" onClick={handlingRed}>+1</button>

        </div>
        
    </div>

    
       
    <p>
    counting numbers : {numbers.map(number=> <li>{number}</li>)}
    <button onClick={handlingArray}>+1</button>
    </p>
    </>
  )
}

export default Ludo