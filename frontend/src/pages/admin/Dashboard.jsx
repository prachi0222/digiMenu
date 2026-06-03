import React from 'react'
import{Link} from "react-router-dom"
function Dashboard() {
  return (
    <div className="container py-5">
      <h1 className='mb-4'>Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-6 mb-3">
            <div className="card shadow">
                    <div className="card-body ">
                      <h5>Total Menu Items</h5>
                      <h2>25</h2>
                    </div>
            </div>
        </div>
         <div className="col-md-6 mb-3">
            <div className="card shadow">
                    <div className="card-body ">
                      <h5>Available Item</h5>
                      <h2>20</h2>
                    </div>
            </div>
        </div>
      </div>
      <div className="mt-4">
        <Link to="/admin/menu/add" className='btn btn-success me-3'>Add Menu</Link>
         <Link
          to="/admin/menu"
          className="btn btn-primary"
        >
          View Menu
        </Link>
      </div>
    </div>
  )
}

export default Dashboard