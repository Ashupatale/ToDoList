import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UseEffectOne() {


    const [count , setCount]=useState(0);

    const[posts , setPosts]=useState([]);

    useEffect(()=>{
        document.title=`You clicked ${count} Times`

    })

    return (
        <div>
                count={count}
            <button onClick={()=>setCount(count + 1)}>Increment Count</button>
        

            {
                posts.map(post => <h4 key={post.id}>{post.title}</h4>)

            }
        </div>

        
    )
}

export default UseEffectOne
