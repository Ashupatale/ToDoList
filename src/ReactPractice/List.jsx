import React from 'react'

function List(props) {
   
    return (
        <div>
            <button onClick={()=>{
                props.onSelect(props.id)
            }} style={{float:"right",backgroundColor:"red",border:"none",color:"white"}}>Delete</button>
            <li style={{listStyle:"none"}}>{props.text}</li>
        </div>
    )
}

export default List
