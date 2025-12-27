import { useReducer } from "react"

const initialState=0

function first(state,action){
    switch(action.type){
        case "increment":    
            return state+1
        case "decrement":
            return state-1
    }
    return state
}

export default function Counter() {
    const [state, dispatch] = useReducer(first, initialState)
  return (
    <div>
        {state}
        <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
        <button onClick={()=>{dispatch({type:"decrement"})}}>-</button>
    </div>
  )
}
