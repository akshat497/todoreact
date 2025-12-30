import React, { useState } from 'react'
import InputDetails from './InputDetails'
import Display from './Display'
import Counter from './Counter'
import User from './User'
import NewComponent from './NewComponent'

export default function App() {
  const [userInput, setUserInput] = useState("")
  const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[])


  return (
   
    <div className='wrapper'>
      <InputDetails userInput={userInput} setUserInput={setUserInput} tasks={tasks} settasks={settasks} />
      <Display tasks={tasks} settasks={settasks}/>
      <Counter/>
      <User/>
      <NewComponent/>
    </div>
    
  )
}
