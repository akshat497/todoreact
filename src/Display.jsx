import React from 'react'

export default function Display({tasks}) {


    function completed(index){

        let clickedTask=tasks.filter((value,filterIndex)=>index==filterIndex)
        clickedTask.complete=!clickedTask.complete
        console.log(clickedTask)
        


    }
  return (
    <><div className='taskswrapper'>
        {tasks.map((value,index)=>{
            return(
             <div className='taskWrapper'>
                   <div className='badge' style={{backgroundColor:value.complete?"green":"grey"}}>{value.complete?"completed":"pending"}</div>
                   <div className='task'>{value.name}</div>
                   <button onClick={()=>{completed(index)}}>{!value.complete?"✔️":"❌"}</button>
             </div>
            )
        })}
        </div>
    </>
  )
}
