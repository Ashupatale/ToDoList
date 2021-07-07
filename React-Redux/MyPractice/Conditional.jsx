import React, { Component } from 'react'

 class Conditional extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedin:true
         }
     }
     
    render() {
        // let message  
        
        // if (this.state.isLoggedin) {
        //     message=<h1>Welcome Aakash</h1>
            
        // }
        // else{
        //     message=<h1>Welcome Guest</h1>


        // }
        return (

            // this.state.isLoggedin &&  <h1>Welcome Aakash</h1>

            this.state.isLoggedin?
            <h1>Welcome Aakash</h1>:
            <h1>Welcome Guest</h1>
           
        )
    }
}

export default Conditional
