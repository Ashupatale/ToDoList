import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function UseFun() {

    const[posts , setPosts]=useState([])

    const[name , setName]=useState("Hello  Please Subscribe us..!")


    const[count , setCount]=useState(0)

    useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //     .then(res=>{
    //         console.log(res)
    //         setPosts(res.data);
    //     })
    //     .catch(err=>{

    //         console.log(err)
    //     })
    // 

    document.title=`you Clicked ${count} times`
})

    
    return (
        <div>
                <h3>{name}</h3>
            <button onClick={()=>setName("Thanks For Subscring...!")} onDoubleClick={()=>setName("You Are Selected..!")}>Change name</button>

                <button onClick={()=>setCount(count+1)}>Increment Number</button>
                <h3>{count}</h3>


                {
                    posts.map(post => <p key={post.id}>{post.title}</p>)

                }
        </div>


    )
}

export default UseFun
