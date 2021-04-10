// Using string ref
import React from 'react'

export default class RefExample3 extends React.Component{
    constructor(props){
        super(props)

        this.state={
            value:''
        }
    }

    handleClick=(e)=>{
        e.preventDefault();
        this.setState({value: this.refs.textInput.value})
    }

    render(){
        return(
            <div>
                <h3>Value is: {this.state.value}</h3>
                <input type="text" ref="textInput"/>
                <button onClick={this.handleClick}>Click Here</button>
            </div>
        )
    }
}