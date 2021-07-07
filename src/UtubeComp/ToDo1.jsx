import React, { useState } from 'react'
import List from './List'

const ToDo = () =>{


    
    const [inputList, setupInputlist]= useState("");

    const [Items, setItems]=useState([]);

    const itemEvent = (event)=>{
        setupInputlist(event.target.value); 

};

    const listItems = ()=>{
        setItems((oldItmes) =>{
            return [...oldItmes,inputList]; 

            

        });  setupInputlist('');
      
    };

    const deleteItems =(id)=>{
        // console.log("deleted");

        
    setItems((oldItmes)=>{
        return oldItmes.filter((arrelem, index)=>{
           return index !== id; 

           })

       
    })
    }



 return(
            <>
                <div className="main-div"
                 style={{
                     width:"500px",
                     height:"650px",
                     border:"2px solid red",
                  marginLeft:"30%",
                  justifyContent:"center",
                  textAlign:"center"
            
                     
                 }}>
                    <h1>To Do App</h1>
                    <input type ="text" placeholder=".....Add todo list...." style={{padding:"10px 30px"}} 
                    onChange={itemEvent} value={inputList}
                    
                    />
                  
                  
                  
                    <button onClick={listItems} style={{background:"green",marginLeft:"2%",cursor:"pointer",padding:"10px 15px"}}>Add </button>

                    
                    <ol style={{paddingTop:"5%"}}>
                   

                        {
                            Items.map((val, index)=>{
                                return (
                                    <List 
                                    key={index}
                                    id={index}
                                    text={val}
                                    onSelect={deleteItems}
                               
                                    />
                                );
                            })
                        }
                       
                    </ol>
                </div>

            </>
        )

}



export default ToDo