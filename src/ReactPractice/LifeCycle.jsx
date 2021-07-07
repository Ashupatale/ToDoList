import axios from 'axios'
import React, { Component } from 'react'

 class LifeCycle extends Component {
    constructor(props){
        super(props)
    
        this.state = {
             Users:[],
             delete:false
        }
    }

    componentDidMount(){
        
     axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res);
            this.setState({Users:res.data})
        })

        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        const {Users}=this.state
        return (
            <div>

                {/* {
                    Users.map(user=><h4 key={user.id}>{user.name}</h4>)
                } */}

            <button onClick={()=>this.setState({delete:true})} >Click here to delete</button>
                {
                    this.state.delete ?
                    null:<User/>
                }
                
            </div>
        )
    }
}

class User extends React.Component{
    componentWillUnmount() {
       alert("Succesfully deleted...!");
    }
    render(){
 
      
       return(
          <> 
              <h3>Username: Aakash</h3>             
              <h3>Email: Akash@gmail.com</h3>
              <h4>Addreess: xyz solapur</h4>
 
          </>
       )
    }
 }
export default LifeCycle
