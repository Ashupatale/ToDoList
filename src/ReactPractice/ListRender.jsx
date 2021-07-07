import React from 'react'

function ListRender() {
   
    const peopleName=["Aakash","Shree","Kiran","Aakash","Shree","Kiran"]

    const PList=[
        {
            id:1,
          name: "Akash",
         age:23
     
         },
 
         {
         id:2, 
         name: "Kiran",
         age:24
     
         },
 
         {
             id:3, 
             name: "Akshay",
             age:24
         
             }
     ]
    
    return (
        <div>
            {
                peopleName.map(people=><h1 key="key">Hello{people}</h1>),

                PList.map(peop=><h1 key="key">{peop.id} {peop.name}</h1>)
                
            }
        </div>
    )
}

export default ListRender
