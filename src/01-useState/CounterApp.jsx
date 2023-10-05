import { useState } from "react"

export const CounterApp = () => {
    const [state, setCounter] = useState({//TODO:estado inicial
        counter1: 10,
        counter2: 20,
        counter3: 30
        
    })
     const {counter1 , counter2 ,counter3} = state;//TODO:desestructuracion

  return (//TODO:llamdo los valores del state
    <>
        <h1>counter: {counter1}</h1>
        <h1>counter: {counter2}</h1>
        <h1>counter: {counter3}</h1>

        <hr />

        <button className="btn btn-success"
         onClick={()=> setCounter ({//TODO: set es el nuevo valor del estado inicial  

            ...state,//expres 
            counter1: counter1 +1,
         })}>+1</button>
    </>
  )
}
// el usestate asigana el valor inicial / pero el setState define el resultado de ese valor  al terminar