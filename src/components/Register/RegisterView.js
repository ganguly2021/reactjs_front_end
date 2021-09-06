import React from 'react'
import TextField from './../common/TextField'

function RegisterView(props) {
  const {
    username,
    email,
    password1,
    password2,
    onInputChange,
    formSubmit
  } = props

  const style = {
    btnRegister: {
      float: 'right'
    }
  }

  return (
    <div className="container-fluid">
      <div className="container p-5">
        <div className="card mx-auto shadow p-2 rounded animate__animated animate__backInLeft w-75" >
          <div className="card-body">
            <form onSubmit={formSubmit} autoComplete="off" noValidate>

              <TextField
                type="text"
                id="username"
                name="username"
                className="form-control"
                placeholder="abc"
                lblText="Username"
                infoText=" It can be your first name or full name."
                value={username}
                onChange={onInputChange}
                error=""
              />

              <TextField
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="abc@abc.com"
                lblText="Email address"
                infoText=" We'll never share your email with anyone else."
                value={email}
                onChange={onInputChange}
                error=""
              />

              <TextField
                type="password"
                id="password1"
                name="password1"
                className="form-control"
                placeholder="abc@abc.com"
                lblText="Password"
                value={password1}
                onChange={onInputChange}
                error=""
              />

              <TextField
                type="password"
                id="password2"
                name="password2"
                className="form-control"
                placeholder="******"
                lblText="Re-Type Password"
                infoText=" Re-Type password must match above password."
                value={password2}
                onChange={onInputChange}
                error=""
              />

              <button type="submit" className="btn btn-success" style={style.btnRegister}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterView
