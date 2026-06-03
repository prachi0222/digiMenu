import React from 'react'

function AddMenu() {
  return (
    <div className="container py-5">
      
      <div className='row justify-content-center'>
         <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4"></div>
            <h2 className='mb-4 text-center'>Add Menu Item</h2>
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
             <input type="text" className='form-control' placeholder='Choose Imaage' />
        </div>

          <div className='d-flex justify-content-center mb-3'>
             <button type="submit" className="btn btn-success">
          Save Menu
        </button>
          </div>
       
      </form>
      </div>
    </div>
     </div>
          </div>
  )
}

export default AddMenu