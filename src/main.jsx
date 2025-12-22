
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToDoContext } from './context/ToDoContext.jsx'

createRoot(document.getElementById('root')).render(
 <ToDoContext>
    <div className='main'>
      <App />
    </div>
   </ToDoContext>
  
)
