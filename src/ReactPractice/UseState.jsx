import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';

function UseState(props) {

    const[posts,setPost]=useState([]);

    const[count, setCount]=useState(0);
    const[name, setName]=useState("Subscribe here")


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })

        .catch(err=>{
            console.log(err)
        })

        document.title=`You clicked ${count} Times`

    },[])

    


    return (
       
        <div>
           Count :  {count}
           <button onClick={()=>setCount(count+1)}>Increment Count</button>
           <h3>{name}</h3>
           <button onClick={()=>setName("Thanks for Subscribing...!")} onDoubleClick={()=>setName("Go Home Now..!")}>Subscribe Here</button>


            {
                posts.map(post=><li key={post.id}>{post.name}</li>)
            }


            <h1>Hello  {props.name} my nickName is {props.nickName} and {props.children}</h1>
        </div>




    )
}

export default UseState
