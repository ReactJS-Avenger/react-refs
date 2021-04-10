
import React from 'react';

// forwarding ref from one component to another component making use of
// React.forwardRef
// Access child component from parent component without re-rendering and
// passing props or state
export default class RefForwarding extends React.Component{
    constructor(props){
        super(props)

        this.inputText= React.createRef();

        this.state={
            value: ''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({value: this.inputText.current.value})
    }

    render(){
        return(
            <div>
            <h3>The value is: {this.state.value}</h3>
            <form onSubmit={this.handleSubmit}>
                <Input ref={this.inputText}/>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

const Input= React.forwardRef((props, ref)=>{
    return(
        <input type="text" ref={ref}/>
    )
})
