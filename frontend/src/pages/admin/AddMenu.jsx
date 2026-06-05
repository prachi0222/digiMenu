import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
 
function AddMenu() {
 
  const [data,setData]=useState({
    itemName:"",
    category:"",
    price:"",
    image:""
  })
  const navigate=useNavigate()
   
  function createMenu(e) {
    e.preventDefault()

    const savedMenus=JSON.parse(localStorage.getItem("menus")) || []

    const newItem={
      id:Date.now().toString(),
      itemName:data.itemName,
      category:data.category,
      price:data.price,
      status:"Active",
      image:data.image
    }

    const updatedMenu=[...savedMenus,newItem]

    localStorage.setItem("menus",JSON.stringify(updatedMenu))
  
     navigate("/admin/menu")
  }
  return (
    <div className="container py-5">
      
      <div className='row justify-content-center'>
         <div className="col-md-8 col-lg-6">
        <div className="card shadow">
            <div className="card-body p-4"></div>
            <h2 className='mb-4 text-center'>Add Menu Item</h2>
      <form onSubmit={createMenu}>
        <div className="mb-3 ps-3 pe-3 ">
             <label className='form-label '>Item Name</label>
             <input type="text"       className='form-control' placeholder='Enter item Name'
             value={data.itemName} onChange={(e)=>setData({...data,itemName:e.target.value})} />
        </div>
         <div className="mb-3 ps-3 pe-3">
             <label className='form-label'>Item Category</label>
            <select className="form-select" 
              value={data.category} onChange={(e)=>setData({...data,category:e.target.value})}
            >
            <option>Main Course</option>
            <option>Bread</option>
            <option>Drinks</option>
            <option>Dessert</option>
          </select>
        </div>
         <div className="mb-3 ps-3 pe-3">
             <label className='form-label'>Item Price</label>
             <input type="text" className='form-control' placeholder='Enter item Price'
               value={data.price} onChange={(e)=>setData({...data,price:e.target.value})}
             />
        </div>
        <div className="mb-3 ps-3 pe-3">
             <label className='form-label'>Image</label>
             <input type="file" className='form-control' placeholder='Choose Food Imaage'
                value={data.image} onChange={(e)=>setData({...data,image:e.target.value})}
             />
        </div>

          <div className=' d-flex justify-content-between mb-3 ms-3 me-3'>
             <Link to="/admin/menu" className="btn btn-dark text-white">
                      Back
                      </Link>

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