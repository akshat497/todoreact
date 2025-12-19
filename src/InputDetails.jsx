

export default function InputDetails({userInput, setUserInput,tasks,settasks}) {
    

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

  return (
    <>
    <p>
            <input className="userInput" type='text' name='inpurValue' value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
            <button className="addButton" onClick={save}>Add</button>
   
    </p> </>
  )
}
