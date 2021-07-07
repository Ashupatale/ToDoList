import React, { Component } from 'react'
import UpdateComp from './Update'


 class ComB extends Component {
     
    render() {
        const{count,increment}=this.props
        return (
            <div>
                    <h3>{count}</h3>
                <button onClick={increment}>Increment By 1</button>
                
            </div>
        )
    }
}

export default  UpdateComp(ComB)
