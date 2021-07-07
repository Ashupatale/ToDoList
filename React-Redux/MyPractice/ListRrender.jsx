import React from 'react'

function ListRrender() {

    const names=["Aakash", "Chanbas", "Prasad"]

    const PersonList=[
        {
            id:1,
            name:"Aakash(Software Developer)",
            
            age:23,

        },
        {
            id:2,
            name:"Shree",
            age:24,

        },
        {
            id:3,
            name:"ganesh",
            age:27,

        },

    ]
    return (
        <div>
            {
                names.map(name=><h2>{name}</h2>)
            }

            {
                PersonList.map(pList=><h2>{pList.name} is a {pList.age} years old and is ID is : - {pList.id}</h2>)
            }
         
        </div>
    )
}

export default ListRrender
