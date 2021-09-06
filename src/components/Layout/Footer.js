import React from 'react'

function Footer() {
  const style = {
    footer: {
      marginTop: '100px'
    }
  }

  return (
    <div className="container-fluid bg-dark text-white" style={style.footer}>
      <div className="container text-center p-5">
        <img width="50" height="50" alt="" src="logo192.png" />
        <p>Copyright @ 2021</p>
      </div>
    </div>
  )
}

export default Footer
