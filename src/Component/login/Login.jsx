import React, { Component } from "react";

export class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            user:{
                userName:"chandan",
                password:"123456"
            },
            status:null,
           inputs: {
            userName:"",
            password:""
            }
        }
    }

    

// login =()=>{

// // if(document.querySelector("#UName").value===this.state.user.userName && document.querySelector("#password").value===this.state.user.password){
//     // console.log("pass");
//     this.setState({
//     status:"pass"
//     })
// }else{
//     this.setState({
//     status:"fail"
//     })
// }


// }



    render(){
        return(
            // <p>chandan</p>
           <div className="login_form">
            <label htmlFor="UName">UserName</label>
            <input type="text" name="userName" id="UName" onChange={e=>{
                this.state.inputs.userName=e.target.value
            }} value={this.state.inputs.userName}/>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" onChange={e=>{
                this.state.inputs.password=e.target.value
            }} value={this.state.inputs.password}/>
            <button onClick={this.login}>Login</button>
            {this.state.status && <p>{this.state.status}</p>}
           </div>
        )
    }
       
    
}