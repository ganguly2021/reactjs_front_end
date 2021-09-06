import React from 'react'

function Home() {
  
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="card w-50 shadow p-2 rounded mx-auto my-5 animate__animated animate__pulse" >
          <div className="card-body text-center">
            <img src="logo192.png" width="100" height="100" className="rounded" alt="" />
            <h2 className="card-title">ABC Corp. Hackathon</h2>
            <p className="card-text">Build a team ranking list application.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
