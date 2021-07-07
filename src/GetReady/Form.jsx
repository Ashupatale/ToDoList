import React, { Component } from 'react'

 class Form extends Component {
    state = {
        user: '',
        rememberMe: false
      };

      
     
      handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ [input.name]: value });
      };
      handleFormSubmit = () => {
        const { user, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
      };
     
    render() {

        return (
            <div>
                
                <form onSubmit={this.handleFormSubmit}>
      <label>
        User: <input name="user" value={this.state.user} onChange={this.handleChange}/>
      </label>
      <label>
        <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
      </label>
      <button type="submit">Sign In</button>
    </form>
            </div>
        )
    }
}

export default Form
