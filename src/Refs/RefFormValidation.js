import React from 'react';

export default class RefFormValidation extends React.Component{
    constructor(props){
        super(props);

        this.username= React.createRef();
        this.password= React.createRef();

        this.state={error: []}
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const username= this.username.current.value;
        const password= this.password.current.value;
        const validation= this.handleValidation(username, password)

        if(validation.length >0){
            this.setState({error: validation})
        }

    }

    handleValidation=(username, password)=>{
        let errors=[]
        if(username.length === 0){
            errors.push("The user name cannot be empty \n")
        }
        if(password.length <7){
            errors.push("Passowrd should be greater than 7 character")
        }
        return errors;
    }

    render(){
        return(
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.username}/><br/>
                    <input type="text" ref={this.password}/><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
