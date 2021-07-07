import React from 'react'
import { Component } from 'react'

const UpdateComp=OriginalComp=>{
    class NewComp extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }

        increment=()=>{
            this.setState({
                count : this.state.count + 1
            })
        }
        render(){
            return(
                <>
                <OriginalComp count={this.state.count}
                increment={this.increment}/>

                </>
            )
        }
    }
    return NewComp;
}

export default UpdateComp