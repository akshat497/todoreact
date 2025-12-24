import { useContext } from "react"
import { createToDo } from "./context/ToDoContext"


export default function InputDetails({userInput, setUserInput,tasks,settasks}) {
    
    let {first,CallContext}=useContext(createToDo)
    function save(){
        let obj={
            name:userInput,
            complete:true
        }
        tasks.push(obj)
        localStorage.setItem("tasks",JSON.stringify(tasks))
        let newTasks=JSON.parse(localStorage.getItem("tasks"))
       settasks(newTasks)
       CallContext()
        
    }

  return (
    <>
    <p style={{display:"flex",marginBottom:"5%"}}>
    {first}
            <input className="userInput" type='text' name='inpurValue' value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
            <button className="addButton" onClick={save}>Add</button>
   
    </p> </>
  )
}
