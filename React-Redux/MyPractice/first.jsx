import React from 'react'
import { Component } from 'react';

class First extends Component{
    constructor(props) {
        super(props)
    
       
    }
    
    render(){
        return(
            <>
            <h1>Hello this is {this.props.name} {this.props.children} so my nick name is {this.props.nickname}</h1>

            </>
        )
    }
}

export default First