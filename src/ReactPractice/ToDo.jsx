import React, { useState } from 'react'
import List from './List';

function ToDo() {

    const[input , setInput]=useState("")

    const[Items, setItems]=useState([]);

    const ItemEvent=(event)=>{
        setInput(event.target.value);
    }
    const ClickEvent = () => {
   
        setItems((oldItmes) => {
          return [...oldItmes, input];
        });
        setInput("");
      };

      const deleteItm=(id)=>{
        
        setItems((oldItmes)=>{
            return oldItmes.filter((arrElm , index)=>{
                return index!==id;
            })
        })
    }
    return (
        <div style={{justifyContent:"center",textAlign:"center"}}>
            <div className="main">
                <h1>To do app</h1>
                <br/>
                <input type="text"
                placeholder="Enter To Do"
                onChange={ItemEvent}
                value={input}
                style={{textAlign:"center"}}/>

            </div>

            <button onClick={ClickEvent} style={{marginTop:"2%"}}>Add item here</button>
            <ol>
                {Items.map((items , index)=>{
                    return <List  
                    text={items}
                    key={index}
                    id={index}
                    onSelect={deleteItm}/>
                })}
            </ol>
            
        </div>
    )
}

export default ToDo
