import React, { Component } from 'react'
import UpdatedComponent from './HocUpdate'


 class HoverHOC extends Component {

   
render() {
    const{count , increment}=this.props

        return (
            <div>
               <h1 onMouseOver={increment}>  Hover Here - {count}</h1>
             
            </div>
        )
    }
}

export default UpdatedComponent(HoverHOC)
