import React from 'react'
import {useState} from 'react'
import './App'

const App =()=>{
    const[data, setData] = useState({
        message:""
    })

    // const [count,setCount] = useState(1)

    const handleChange=(e)=>{
        const value = e.target.value;
        setData({message: value})
        console.log("Value:", value)
    
    }

    return(
        <div className="input-container">
            <div className="input">
                <label htmlFor="message" type="text" >Enter a Message:</label>
                <input id="message" value={data.message} onChange={handleChange}></input>
            </div>

            <div className="data-container">
                <div>{data.message.length}</div>
            </div>

        </div>
    )
}
export default App