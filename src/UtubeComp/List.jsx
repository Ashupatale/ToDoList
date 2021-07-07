import React from 'react'

const List = (props)=>{


    
    return(
        <>
            <div className="ToDo-styles" style={{justifyContent:"right",}}>
            <i className="fa fa-times"  onClick={() =>
            props.onSelect(props.id)
        }
            style={{
                marginLeft:"80%",
                width:"20px",
                height:"18px",
                justifyContent:'center',
                alignItems:"center",
                background:"red",
                borderRadius:"50%",
                paddingTop:"2px",
                cursor:"pointer "
                }}></i>

                
             <li>{props.text}</li>

            </div>
        </>
    )
}


export default List