import React from 'react';
import './App.css';
import {useState} from 'react';

const App = () =>{
    const[counter, setCounter] = useState(0)

    const handleIncrement=()=>{
      setCounter(counter+1)
    }
     const handleDecrement=()=>{
       setCounter(counter-1)
    }
     const handleReset=()=>{
        setCounter(0)
    }
    
    return(
        <div className="counter-app">
            <div className="button-container">
                <h1>Counter:{counter}</h1>
                <button className="button" onClick={handleIncrement}>Increment</button>
                 <button className="button" onClick={handleDecrement}>Decrement</button>
                 <button className="button" onClick={handleReset}>Reset</button>
            </div>
            
        </div>
    )
}
export default App