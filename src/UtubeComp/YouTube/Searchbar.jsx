import React, { Component } from 'react'

 class Searchbar extends Component {
     state={
         Input:""
     }

     handleChange=(event)=>{
         this.setState({
             Input:event.target.value
         });

     };

     handleSubmit=event=>{
         event.preventDefault();
         this.props.handleSubmit(this.state.Input)
     }
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Search Video</label>
                        <input type="text"
                        placeholder="Serach Here"
                        onChange={this.handleChange}
                        value={this.state.Input} />
                    </form>

                </div>
                
            </div>
        )
    }
}

export default Searchbar
