import React from 'react'
import TextField from './../common/TextField'


function LoginView(props) {

  const {
    email,
    password,
    onInputChange,
    formSubmit
  } = props

  const style = {
    btnLogin: {
      float: 'right'
    }
  }

  return (
    <div className="container-fluid">
      <div className="container p-5">
        <div className="card mx-auto shadow p-2 rounded animate__animated animate__backInLeft w-75">
          <div className="card-body">
            <form onSubmit={formSubmit} autoComplete="off" noValidate>
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
                id="password"
                name="password"
                className="form-control"
                placeholder="******"
                lblText="Password"
                value={password}
                onChange={onInputChange}
                error=""
              />

              <button type="submit" className="btn btn-success" style={style.btnLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginView
