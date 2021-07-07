import React, { Component } from 'react'
import UpdatedComp from './HocUpdate'

 class Hoc extends Component {
    
     
    render() {
        const{count, IncrementCount}=this.props

        return (
            <div>
                <h1 onMouseOver={IncrementCount}>{count}</h1>
               
                
            </div>
        )
    }
}

export default  UpdatedComp(Hoc)
