import React from "react";

export default function Display({ tasks, settasks }) {
  function completed(index) {
    let clickedTask = tasks.map((value, filterIndex) => {
      return index == filterIndex
        ? { ...value, complete: !value.complete }
        : value;
    });
    settasks(clickedTask);
    localStorage.setItem("tasks", JSON.stringify(clickedTask));
  }
  function Delete(index){
    let updatedTasks=tasks.filter((value,i)=>i!=index)
    settasks(updatedTasks)
    localStorage.setItem("tasks",JSON.stringify(updatedTasks))

  }
  return (
    <>
      <div className="taskswrapper">
        {tasks.map((value, index) => {
          return (
            <div className="taskWrapper">
              <div
                className="badge"
                style={{
                  backgroundColor: value.complete ? "green" : "grey",
                  borderRadius: "100%",
                }}
              >
                {value.complete ? "completed" : "pending"}
              </div>
              <div style={{ display: "flex" }}>
                <div className="task">{value.name}</div>
                <div style={{display:"flex",width: "120px",justifyContent:"space-between" }}>
                  <button
                  onClick={() => {
                    completed(index);
                  }}
                >
                  {!value.complete ? "✔️" : "❌"}
                </button>
                <button onClick={()=>{Delete(index)}}>
                  Delete
                </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
