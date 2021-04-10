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
                <h3 className="sub header">value displayed: {this.state.value}</h3>
            <form onSubmit={this.handleSubmit}>

               {/* using callback fucntion in ref */}
               <div className="ui form">
                   <div className="field">
                   <input type="text" ref={e => this.textInput =e}/>
                   </div>
               </div>

                 {/* <input type='text' ref={this.textInput}/> */}
                 <br/>
                <button className="ui button">Submit</button>
            </form>
            </div>
        )
    }
}