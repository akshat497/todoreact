import React, { useState } from 'react'
import InputDetails from './InputDetails'
import Display from './Display'
import RegistrationForm from './RegistrationForm'

export default function App() {
  const [userInput, setUserInput] = useState("")
  const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[])
  return (
    <div className='wrapper'>
      <InputDetails userInput={userInput} setUserInput={setUserInput} tasks={tasks} settasks={settasks}/>
      <Display tasks={tasks} settasks={settasks}/>
      <RegistrationForm/>
    </div>
  )
}
