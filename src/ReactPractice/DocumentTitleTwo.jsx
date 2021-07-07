import React from 'react'
import { useState } from 'react'
import UseDocTitle from '../UseDocTitle'

function DocumentTitleTwo() {

    const[count , setCount]=useState(0)

    UseDocTitle(count)
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={()=>setCount(count+1)}>Increment Count</button>
        </div>
    )
}

export default DocumentTitleTwo;
