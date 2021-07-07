import React, { Component } from 'react'
import UpdatedComponent from './HocUpdate'

 class ClickHOC extends Component {

    
render() {
    const{count , increment}=this.props
        return (
            <div>
               <h1>{count}</h1>
                <button onClick={increment}> Click here</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickHOC)
