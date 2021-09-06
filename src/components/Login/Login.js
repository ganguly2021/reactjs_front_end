import React, { Component } from 'react'
import LoginView from './LoginView'

class Login extends Component {

  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }

  }

  onInputChange = (e) => {
    e.preventDefault()

    // get form value
    const target = e.target
    const name = target.name
    const value = target.value

    // set state
    this.setState({ [name] : value })
  }

  formSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)
  }

  render() {
    return (
      <LoginView 
        email={this.state.email}
        password={this.state.password}
        formSubmit={this.formSubmit}
        onInputChange={this.onInputChange}
      />
    )
  }
}

export default Login
