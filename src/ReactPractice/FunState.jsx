import React  from 'react'
import { Component } from 'react';

class FunState extends Component{
    constructor(){
        super()
        this.state={
            name:"pls Subscribe here",
            count:0,
            isLoggedIn:true
        }
    }

    increment(){
        this.setState({
            count:this.state.count+1
        })
    }

    ChangeName(){
        this.setState({
            name:"Thanks for Subscribing...!"
        })
    }
    render(){
      
        return(
            <>
                 {
                     this.state.isLoggedIn && <h1>Welcome Aakash</h1>
                     
                 }
           
                <h3>{this.state.count}</h3>
                <h3>{this.state.name}</h3>
                <button onClick={()=>this.increment()} onDoubleClick={()=>this.ChangeName()}>Increment</button>


                <h1>Hello {this.props.name} My Nickname is {this.props.nickName} and {this.props.children}</h1>

            </>
        )
    }
}


export default FunState
