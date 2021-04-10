import React, { useRef } from 'react';

const RefHook=()=>{
    const buttonRef= useRef();
    return(
        <div>
           <h3>Button ref with useRef Hook</h3>
           <button
           onClick={()=>console.log(buttonRef.current)}
           ref={buttonRef}>
               Click here
           </button>
        </div>
    )
}
export default RefHook