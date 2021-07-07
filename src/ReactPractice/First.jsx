import React, { Component } from 'react'

 class Frist extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} My nick Name is {this.props.nickName} and {this.props.children}</h1>
            </div>
        )
    }
}

export default Frist
