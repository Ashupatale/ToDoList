import React, { Component } from 'react'
import UpdatedComp from './HocUpdate'

 class Hoc extends Component {
    
     
    render() {
        const{count, IncrementCount}=this.props
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={IncrementCount}>Click here</button>
                
            </div>
        )
    }
}

export default  UpdatedComp(Hoc)
