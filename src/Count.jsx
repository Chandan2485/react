import React, { Component } from "react";

export  class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  increament = ()=>{
   this.setState({
    number:(this.state.number<10)? this.state.number +1:10
    })
  }

  decreament = ()=>{
      this.setState({
        number:(this.state.number>0)? this.state.number -1:0
        //  number:this.state.number -1
      })
     }

  render() {
    return (
      <div className="App">
             <h2>{this.state.number}</h2>
             <button onClick={this.increament}>increament</button>
             <button onClick={this.decreament}>decreament</button>
      </div>
    );
  }
}
