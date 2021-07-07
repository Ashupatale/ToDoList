import React, { Component } from 'react'

 class Conditional extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn:true
         }
     }
     
    render() {
        // let message
        // if (this.state.isLoggedIn) {
          
        //     message=<h1>Welcome Aakash...!</h1>
            
            
        // }
        // else{
           
        //       message=<h1>Welcome Guest..!</h1>
            
        // }

        return (
            this.state.isLoggedIn && 
            <h1>Welcome Aakash..!</h1>
            
            
        )
    }
}

export default Conditional
