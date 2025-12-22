import { createContext, useState } from "react";

export const createToDo=createContext();

export  function ToDoContext(props) {
    const [first, setfirst] = useState("Akshat")
  return (
    <createToDo.Provider value={{first}}>
      {props.children}
    </createToDo.Provider>
  )
}




