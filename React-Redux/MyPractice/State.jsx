import React, { Component } from 'react'

 class State extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              massege:"Please Subscribe to Our Channel"
         }
     }

     ChangeMsg(){
         this.setState({
             massege:"Thank you for subscribing...!"
         })

     }

     ChangeMsgAgain(){
        this.setState({
            massege:"Watch our videos now...!"
        })

    }
     
    render() {
        return (
            <div>
                <>
                <h1>{this.state.massege}</h1>

                <button onClick={()=> this.ChangeMsg} onDoubleClick={()=>this.ChangeMsgAgain()}>Subscribe here</button>

                </>
            </div>
        )
    }
}

export default State
