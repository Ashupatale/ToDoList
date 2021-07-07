import React from 'react'

function Customer() {
    const BankCustomer=[
        {
            id: '1',
            firstname: 'Customer 1',
            lastname: 'Aakash',
            year: 2019,

        },

        {
            id: '2',
            firstname: 'Customer 2',
            lastname: 'xyz',
            year: 2020,

        },

        {
            id: '3',
            firstname: 'Customer 3',
            lastname: 'xyz',
            year: 2021,

        },

    ]

    const deleteItm=(id)=>{
        console.log("Deleted...!")
        return deleteItm.filter((ArrElm , index)=>{
            return index!==id;
        });
    }
    return (
        <>
        <div style={{justifyContent:"center",textAlign:"center"}}>
        <h2 style={{backgroundColor:"violet",width:"40%",margin:"auto"}}>Welcome to HDFC bank</h2>

        <div>
                {
                    BankCustomer.map(custm=><p key="key">Hello {custm.firstname} {custm.lastname} <button onClick={deleteItm}>Delete Entry</button></p> )
                }
            
        </div>
        </div>
        </>
    )
}

export default Customer
