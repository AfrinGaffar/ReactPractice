import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Practice from './practice.jsx'
// import Toggle from './Message.jsx'
// import Count from './CharacterCount.jsx'
// import Todo from './Todo.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contact />
  </StrictMode>,
)
