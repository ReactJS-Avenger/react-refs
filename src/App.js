import React from 'react'
import RefHook from './Refs/RefHook'
import RefExample1 from './Refs/Ref'
import RefExample2 from './Refs/RefExample2'
import RefExample3 from './Refs/RefExample3'
import RefForwarding from './Refs/RefForwarding'
import RefFormValidation from './Refs/RefFormValidation'

const App =()=>{
    return(
        <div>
            <h1>RefHooks</h1>
            <RefHook/>
            <hr/>
            <h1>Ref</h1>
            <RefExample1/>
            <hr/>
            <h1>passing ref from parent to child</h1>
            <RefExample2/>
            <hr/>
            <h1>Using ref as a String</h1>
            <RefExample3/>
            <hr/>
            <h1>Ref Forwarding</h1>
            <RefForwarding/>
            <hr/>
            <h1>Ref for form validation</h1>
            <RefFormValidation/>
        </div>
    )
}

export default App
