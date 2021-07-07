import React, { Component } from 'react'
import axios from 'axios'

 class LifeCycle extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Users:[]
         }
     }
     
     componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res.data);
            this.setState({Users:res.data})
            
        })
        .catch(error =>{
            console.log( error, "error..!");

        })
     }


    render() {
        const{Users}=this.state
        return (
            <div>
                    
               {
                   Users.map(user=><div key={user.id}>{user.email}</div>)
               }    
                   
             
                
            </div>
        )
    }
}

export default LifeCycle
