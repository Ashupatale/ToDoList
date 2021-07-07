import React, { Component } from 'react'

 class One extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name:"Subscribe here",
             channel:"Thapa Technical"
        }
    }

    Increment=()=>{
        this.setState({
            count: this.state.count+1
        })
    }

    ChangHandler=()=>{
        this.setState({
            name:"Thanks for Subscribing...!"
        })
    }

    ChangeChannel=()=>{
        this.setState({
            channel:"Welcome to Code Evaluation"
        })
    }

    render() {
        return (
            <div>
                <h1>Hello {this.props.name} {this.props.nickName} {this.props.children}</h1>
                <h2>{this.state.count}</h2>

                <button onClick={this.Increment}>Clich here</button>
                <h2>{this.state.name}</h2>
                <button onClick={this.ChangHandler}>Clich here</button>

                <h3>{this.state.channel}</h3>
                <button onClick={this.ChangeChannel}>Change Channel</button>


            </div>
        )
    }
}

export default One
