import React from 'react'
import { useState } from 'react'

function Form1() {
    const [users, setUsers]=useState([{
        users:"",
        password:"",
        email:""
    }])

    const handleNameChange=(e)=>{
        setUsers({[e.target.name]:e.target.value})
        localStorage.getItem("users",users)

    }

    const handleSubmit=(e)=>{ 
        e.preventDefault();
        
        console.log(users);
        localStorage.setItem("users",users)
        
       }
    
       return (
        <div style={{textAlign:"center"}}>
            
            
            <form onSubmit={handleSubmit}>
               <input type="text" name="users"   onChange={handleNameChange} placeholder="enter name"/>
               <br/>
               
               <input type="email" name="email"   onChange={handleNameChange}  placeholder="enter email"/>

               <br/>

               <input type="password" name="password"  onChange={handleNameChange}  placeholder="enter pass "/>

               <br/>

               <button type="submit">Log in</button>
            
            </form>
            
        </div>
    )
}

export default Form1
