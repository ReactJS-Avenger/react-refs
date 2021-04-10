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
        if(this.state.error) 
        return(
            <div>
                <p className={"ui"+ (this.state.error.length>0 ? " error " : null)  +"message"}>{this.state.error}</p>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Username</label>
                    <input type="text" ref={this.username} placeholder="UserName"/><br/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                    <input type="text" ref={this.password} placeholder="password"/><br/>
                    </div>
                    <button className="ui button">Submit</button>
                </form>
            </div>
        )
    }
}
