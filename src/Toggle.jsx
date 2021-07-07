import React, { Component } from 'react'

 class Toggle extends Component {
     constructor(props) {
     super(props)
 
     this.state = {
          display:false
     }
 }
 handlClick=()=>{
     const currentStatus=this.state.display;
     this.setState({
         display:!currentStatus
     })
 }
 
    render() {
        let content=null;
        if (this.state.display) {
            content=<h2>Hello</h2>

            
        }
        return (
            <div>
                <button onClick={this.handlClick}>ON</button> 
                {content} 
            </div>
        )
    }
}

export default Toggle
