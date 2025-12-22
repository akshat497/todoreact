import { useContext } from "react"
import { createToDo } from "./context/ToDoContext"

export default function Display({tasks,settasks}) {
  const {first} = useContext(createToDo)

 
  function markCompleted(index){

    let updatedtask=tasks.map((value,mapIndex)=> index==mapIndex?{...value,complete:!value.complete}:value
    )
    settasks(updatedtask)
    localStorage.setItem("tasks",JSON.stringify(updatedtask))


  }

    function Delete(index){
       const updatedTasks= tasks.filter((value,i)=> i!=index)
       settasks(updatedTasks)
       localStorage.setItem("tasks",JSON.stringify(updatedTasks))
        

    }

  return (
    <><div className='taskswrapper'>
        {tasks.map((value,index)=>{
            return(
             <div className='taskWrapper'>
             <div>{first}</div>
                   <div style={{display:"flex",justifyContent:"space-between",gap:"50px"}}>
                    <div className='badge' style={{backgroundColor:value.complete?"green":"grey"}}>{value.complete?"completed":"pending"}</div>
                   <div className='task'>{value.name}</div>
                   <button onClick={()=>{markCompleted(index)}}>{!value.complete?"✔️":"❌"}</button>
                   <button onClick={()=>{Delete(index)}} style={{background:"red",color:"white",padding:"2%",borderRadius:"10px"}}>Delete</button>
                   </div>
                   
             </div>
            )
        })}
        </div>
    </>
  )
}
