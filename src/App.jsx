import { useState } from 'react';
import './App.css';
import React from 'react';

const App = () => {
const [mode , setMode] = useState('light')

const handleClick=() =>{
 setMode(mode === 'light' ? 'dark' : 'light')
  }
// colour toggles the text colour

  return (
    <div className="mode">
      <div className="button-container" style ={{background :mode === 'light' ? 'white' : 'black',
        // color:mode === 'light' ? 'black' : 'white',
        display : 'flex',
         justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
            width: '100vw',

      }}>
        <button onClick={handleClick} >click Me</button>
      </div>
    </div>
  )
}

export default App;