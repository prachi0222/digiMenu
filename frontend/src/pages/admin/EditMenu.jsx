import React from 'react'
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
function EditMenu() {
  const { id } = useParams();

  return (
     <div className="container py-5">
      
      <div className='row justify-content-center'>
         <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4"></div>
            <h2 className='mb-4 text-center'>Edit Menu Item</h2>
      <form action="">
        <div className="mb-3 ps-3 pe-3 ">
             <label className='form-label '>Item Name</label>
             <input type="text" className='form-control' placeholder='Enter item Name' />
        </div>
         <div className="mb-3 ps-3 pe-3">
             <label className='form-label'>Item Category</label>
            <select className="form-select">
            <option>Main Course</option>
            <option>Bread</option>
            <option>Drinks</option>
            <option>Dessert</option>
          </select>
        </div>
         <div className="mb-3 ps-3 pe-3">
             <label className='form-label'>Item Price</label>
             <input type="text" className='form-control' placeholder='Enter item Price' />
        </div>
        <div className="mb-3 ps-3 pe-3">
             <label className='form-label'>Image</label>
             <input type="file" className='form-control' placeholder='Choose Food Imaage' />
        </div>

             

          <div className=' d-flex justify-content-between mb-3 ms-3 me-3'>
             <Link to="/admin/menu" className="btn btn-dark text-white">
                      Back
                      </Link>

             <button type="submit" className="btn btn-success">
          Update Menu
        </button>
          </div>
       
      </form>
      </div>
    </div>
     </div>
          </div>
  )
}

export default EditMenu