import React from 'react'
import { UserConsumer } from './UserContext'

function ComponentC() {
    return (
        <div>
           <UserConsumer>
               {
                  Username=>{
                        return<div>Hello {Username}</div>
                  } 
               }
           </UserConsumer>
        </div>
    )
}

export default ComponentC
