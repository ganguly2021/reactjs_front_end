import React, { Component } from 'react'
import RegisterView from './RegisterView'

class Register extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: ''
    }
  }

  onInputChange = (e) => {
    e.preventDefault()

    // get value from input field
    const target = e.target
    const name = target.name
    const value = target.value

    // update state
    this.setState({ [name]: value })
  }

  formSubmit = (e) => {
    e.preventDefault()

    console.log(this.state)
  }

  render() {
    return (
      <RegisterView
        username={this.state.username}
        email={this.state.email}
        password1={this.state.password1}
        password2={this.state.password2}
        onInputChange={this.onInputChange}
        formSubmit={this.formSubmit}
      />
    )
  }
}

export default Register
