import React from 'react'

function States() {
    // const PeopleName=["Aakash","Shree","Ritesh","Nitesh"]

    const Objects=[
        {
            id:0,
            name:"aakash",
            age:23
        },

        {
            id:1,
            name:"Shree",
            age:24
        },

        {
            id:3,
            name:"Shashank",
            age:25
        },

        {
            id:4,
            name:"Nitesh",
            age:30
        },
    ]
    return (
     
        <div>
            {/* {
                PeopleName.map(people => <h1 key="key">{people}</h1>)
            } */}

            {
                Objects.map(obj=><h4 key={obj.id}>{obj.name} and I am a {obj.age} years old</h4>)
            }

           
            
        </div>
    )
}

export default States
