import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffect() {

    const[posts, setPosts]=useState([]);

    const[count , setCount]=useState(0);

    useEffect(()=>{
        
        document.title=`You clicked ${count} Time`

        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(error=>{
            console.log(error)
            setPosts(error.data)
        })
    }, [])
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={()=>setCount(count+1)}>Click me</button>

            <div>
                <ul>
                    {
                        posts.map(post => <li style={{listStyle:"none"}}><div key={post.id}>{post.title}</div></li>)
                    }
                </ul>
            </div>

            
            
        </div>
    )
}

export default UseEffect
