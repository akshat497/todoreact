import { useEffect, useRef } from "react";



export default function InputDetails({userInput, setUserInput,tasks,settasks}) {
    const firstNameRef = useRef();
   
    function save(){
        let obj={
            name:userInput,
            complete:true
        }
        tasks.push(obj)
        localStorage.setItem("tasks",JSON.stringify(tasks))
        let newTasks=JSON.parse(localStorage.getItem("tasks"))
       settasks(newTasks)
        
    }

    useEffect(()=>{firstNameRef.current.focus()},[])

  return (
    <>
    <p className="userInputWrapper"> 
            <input ref={firstNameRef} className="userInput" type='text' name='inpurValue' value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
            <button className="addButton" onClick={save}>Add</button>
   
    </p> </>
  )
}
