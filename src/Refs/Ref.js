import React from 'react';

export default class RefExample1 extends React.Component{
    constructor(props){
        super(props)

         this.textInput= React.createRef();

        this.state={
            value:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        //using callback fucntion; no need of React.createRef()
        //Example <input type="text" ref={element=> this.textContent =element}
        this.setState({value: this.textInput.value})

        // this.setState({value: this.textInput.current.value})
    }

    render(){
        return(
            <div>
                <h2>value displayed: {this.state.value}</h2>
            <form onSubmit={this.handleSubmit}>

               {/* using callback fucntion in ref */}
                <input type="text" ref={e => this.textInput =e}/>

                 {/* <input type='text' ref={this.textInput}/> */}
                <button>Submit</button>
            </form>
            </div>
        )
    }
}