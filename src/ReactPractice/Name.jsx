import React, { Component } from 'react'

 class Name extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              userId:"",
              title:"",
              body:""
         }
     }
     
     ChangeHandler=e=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }

     submitHandler=(e)=>{
         e.preventDefault()
         console.log(this.state)
     }
    render() {
        const{userId,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <input type="text" name="userId"  value={userId} onChange={this.ChangeHandler}/>

                <input type="text" name="title"  value={title} onChange={this.ChangeHandler}/>

                <input type="text" name="body" value={body} onChange={this.ChangeHandler}/>

                <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Name
