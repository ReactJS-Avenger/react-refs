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
                <h3 className="sub header">value is: {this.state.value}</h3>
                <div className="ui form">
                <div className="field">
                <input type="text" ref="textInput"/>
                </div>
                </div>
                <br/>
                <button className="ui button" onClick={this.handleClick}>Click Here</button>
            </div>
        )
    }
}