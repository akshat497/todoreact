import React, { useCallback, useMemo } from 'react'

export default function NewComponent() {
    const [first, setfirst] = React.useState(0)
    const [second, setsecond] = React.useState(0)

    function calculation(){

        //heavy calutaion
        console.log("heavy calutaion is running")
         
    }
    const heavyCALCULATION=useMemo(() => calculation(), [first])
    useCallback(() => {
        console.log("Click");
    }, [first]);

    // useMemo is used to memoize the value of heavyCALCULATION
    // useCallback is used to memoize the function
    // so that it does not get recreated on every render

    console.log("NewComponent Rendered")

    // useMemo is used to memoize the value of heavyCALCULATION
    // so that it does not get recalculated on every render
    // useCallback is used to memoize the function
    // so that it does not get recreated on every render    

  return (
    <>
        <div>{first}</div>
    <button onClick={() => setfirst(first + 1)}>Increment</button>
        <div>{second}</div>
    <button onClick={() => setsecond(second + 1)}>Increment Second</button>
    </>
  )
}
