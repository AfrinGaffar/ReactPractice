import React from 'react'
import {useState} from 'react'
import './App.css'

const App=() =>{
    const[data,setData]=useState({
        message:""
    })
// whenever we want to add something we need to define state for obj and to store that obj , we need array as a state alswo
    const[items, setItems]=useState([])

    const handleChange=(e)=>{
        const value=e.target.value;
        setData({message:value})
    }

    const handleClick=()=>{
        if(data.message.trim() !==''){
            setItems([...items,data.message])
            setData({message:''})
        }
    }

    const handleDelete=(itemToDelete)=>{
        const isConfirm = window.confirm("Are you sure?")
        if(!isConfirm){
            return;
        }
        setItems(items.filter((item)=> item!== itemToDelete))
    }

    return(
        <div className= "input-conainer">
            <div className="inputData">
                <label htmlFor="message" type="text">Message</label>
                <input id="message" type="text" value={data.message} onChange={handleChange}></input>
            </div>
            <div className="button">
                <button onClick={handleClick}>Add</button>
                 {/* <button onClick={()=>handleDelete(itemToDelete)}>Delete</button> */}
            </div>

            <div className="message-container">
                {items.map((item,index) =>
                <div key={index}>{item}
                 <button onClick={()=>handleDelete(item)}>Delete</button>
                 </div>
                )}

            </div>
        </div>
    )
}

export default App