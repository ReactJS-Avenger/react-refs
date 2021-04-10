// In this example we will pass ref from parent to child 

import React from 'react';

export default class ReactExample2 extends React.Component{
    constructor(props){
        super(props)

        this.state={
            value: ''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({value: this.textContent.value})
    }

    render(){
        return(
            <div>
                <h2> value displayed: {this.state.value}</h2>
                <Child inputRef={element => this.textContent= element}/>
                <button onClick={this.handleSubmit}>Click Here</button>
            </div>
        )
    }
}

export class Child extends React.Component{
    render(){
        return(
            <div>
                <input type="text" ref={this.props.inputRef}/>
            </div>
        )
    }
}