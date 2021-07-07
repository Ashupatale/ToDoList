import React from 'react'
import { useState } from 'react'

function UseState() {

    const[name , setName]=useState("Aakash")
    return (
        <div>
            <h1>Name{name}</h1>
            <button onClick={()=> setName("Ashutosh Patale")}>Clicke me</button>
        </div>
    )
}

export default UseState
