import { createContext, useState } from "react";

export const createToDo=createContext();

export  function ToDoContext(props) {
    const [first, setfirst] = useState("Akshat")
    function CallContext(){
      console.log("function of context")
    }
  return (
    <createToDo.Provider value={{first, CallContext}}>
      {props.children}
    </createToDo.Provider>
  )
}




