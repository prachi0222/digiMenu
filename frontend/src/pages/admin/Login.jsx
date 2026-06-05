import React from 'react'
import {Link} from "react-router-dom"
function Login() {
  return (
    <div className='container py-5'>
        <div className='row justify-content-center'>
         <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4"></div>
            <h2 className='mb-4 text-center'>Admin Login</h2>
      <form action="">
        <div className="mb-3 ps-3 pe-3 ">
             <label className='form-label '>Email</label>
             <input type="email" className='form-control' placeholder='Enter Email Address' />
        </div>
         <div className="mb-3 ps-3 pe-3">
             <label className='form-label'>Password</label>
              <input type="password" className='form-control' placeholder='Enter Password' />
        </div>
          <div className='d-flex justify-content-center mb-3'>
             <button type="submit" className="btn btn-success">
          Login
        </button>
          </div>
       
      </form>
      </div>
    </div>
     </div>
          </div>
    
  )
}

export default Login