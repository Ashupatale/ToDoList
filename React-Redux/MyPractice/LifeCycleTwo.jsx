import React, { Component } from 'react'

 class LifeCycleTwo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             delete:false
        }
    }
    
    render() {
        return (
            <div>
                <center>
                    <button onClick={()=>this.setState({delete:true})} onDoubleClick={()=>this.setState({delete:false})}>Delete Users here</button>
                    {this.state.delete ? null: <Users/>
                        
                    
                    }
                    </center>
            </div>
        )
    }
}

 class Users extends Component {

    componentWillUnmount(){
        alert("Users Deleted Successfully...!")
    }

    render() {
        return (
            <>
            <h2 style={{backgroundColor:"violet"}}>Users information</h2>
            <div>   
                <h4>Username: Aakash</h4>             
             <h4>Email: Akash@gmail.com</h4>
             <h4>Addreess: xyz solapur</h4>
                
            </div>
            </>
        )
    }
}
















export default LifeCycleTwo
