import React, { useRef } from 'react';

const RefHook=()=>{
    const buttonRef= useRef();
    return(
        <div>
           <h3 className="sub header">Button ref with useRef Hook</h3>
           <button 
           className="ui button"
           onClick={()=>console.log(buttonRef.current)}
           ref={buttonRef}>
               Click here
           </button>
        </div>
    )
}
export default RefHook