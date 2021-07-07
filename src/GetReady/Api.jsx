import React, { useEffect } from 'react'
import { useState } from 'react';

function Api() {
const[users, setUsers]=useState([]);

const getUsers= async() =>{
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
  
     setUsers(await response.json());
    
}

useEffect(()=>{
    getUsers();
},[]);

return (
        <>
            <h4 style={{textAlign:"center",backgroundColor:"violet"}}>List of Api Users</h4>

            <div className="" style={{}}>
                <div className="" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                   
                   {
                       users.map((currElement)=>{
                           return(
                               <div>
                                    
                                
                                    <div className=" " style={{}}>
                                        <div className="imgClass">
                                            <img src="https://picsum.photos/200/300" style={{borderRadius:"50px"}}/>
                                        </div>

                                        <div className="main" style={{marginLeft:"2%"}}>
                                            <div className="d-flex flex-column"><strong><span> User: </span>{currElement.name}</strong> </div>

                                            <div className="d-flex flex-column"><span>Id : </span><span>{currElement.id}</span> </div>


                                            <div className="d-flex flex-column"><span>Email :  </span><span>{currElement.email}</span> </div>
                                            
                                            <div className="d-flex flex-column"> <span>Wesbite: </span> <span>{currElement.website}</span>
                                        
                                            </div>


                                        </div>

                    </div>


                                   </div>
                           )
                       })
                   }
                   
                   
                 </div>
                
            </div>
        </>
    )
}

export default Api
