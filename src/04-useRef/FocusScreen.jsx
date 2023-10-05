import { useRef } from 'react';


export const FocusScreen = () => {

  const inputRef = useRef();


const actionFocus = ()=>{
    // document.querySelector('input').select();
    // console.log(inputRef)
    inputRef.current.select();
}

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input
        ref={ inputRef }
         type="text" 
         className="form-control"
            placeholder="Our Name"
        />
            <button
             className=" btn btn-primary mt-2"
             onClick={actionFocus}
             >
                Set Focus
            </button>
    </>
  )
}
