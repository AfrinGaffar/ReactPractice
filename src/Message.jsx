import React from 'react';
import {useState} from 'react';
import './App'

const App=()=>{
    const[toggle, setToggle]= useState(false)

    const showText=() => {
        setToggle(!toggle)
    }


    return(
        <div className="Toggle">
            <div className="button-toggle">
                <button className="button" onClick={showText}>{toggle? 'show text' : 'hide text'}</button>
                {toggle &&
                <p>Hello! I am visible now</p>
}
            </div>
        </div>
    )
}
export default App