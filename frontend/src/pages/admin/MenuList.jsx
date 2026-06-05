import React from 'react'
import { Link } from "react-router-dom"
import { menus } from '../../data/dummyData'
import { useState } from 'react'

function MenuList() {
  const [menuList, setMenuList] = useState(()=>{
    const savedMenus=localStorage.getItem("menus")
    return savedMenus?JSON.parse(savedMenus):menus
  })

  
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
    alert("Menu Added SuccessFully")
     navigate("/admin/menu")
  }

  function handleDelete(id) {
    if (window.confirm("Are You Sure to Delete That Record")) {
       const updatedList = menuList.filter(item => item.id !== id)
      setMenuList(updatedList)
      localStorage.setItem("menus",JSON.stringify(updatedList))
    }

  }
  function setStatus(id) {
    const updateStatus = menuList.map((item,index) => item.id === id ? {
      ...item,
      status: item.status === "Active" ? "Inactive" : "Active"
    }
      : item)
    
    setMenuList(updateStatus)
    localStorage.setItem("menus", JSON.stringify(updateStatus));
  }
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Menu List</h2>
        <Link to="/admin/menu/add" className="btn btn-dark text-white">
          <i className="fas fa-plus me-2"></i>
          Add Menu</Link>
      </div>
      <div className="table-responsive">

        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>

              <th>S.No.</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
              <th></th>
              <th></th>

            </tr>
          </thead>

          <tbody>
            {menuList.length > 0 ? (
              menuList.map((item, index) => (
                <tr key={item.id}>

                  <td>{index + 1}</td>
                  <td> <img
                    src={item.image}
                    alt={item.itemName}
                    width="60"
                    height="60"
                    className="rounded"
                  /></td>
                  <td>{item.itemName}</td>
                  <td>{item.category}</td>
                  <td>&#8377;{item.price}</td>
                  <td>{item.status === "Active" ? (
                    <span className='badge bg-success'>Active</span>
                  ) : (<span className='badge bg-danger'>Inactive</span>)}

                  </td>
                  <td>
                    <button
                      className="btn btn-info "
                      onClick={() => setStatus(item.id)}
                    >
                      Change Status
                    </button>
                  </td>
                  <td>
                    <Link to="/admin/menu/edit/:id" className="btn btn-warning">
                      <i className="fas fa-pencil me-2"></i>
                    </Link>
                  </td>
                  <td>
                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>Delete</button></td>
                </tr>
              ))
            )
              : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No menu items found
                  </td>
                </tr>
              )}


          </tbody>
        </table>
        <div className='d-flex justify-content-center '>
          <Link
            to="/admin"
            className="btn btn-dark text-white"
          ><i className='fas fa-arrow-left me-2 '></i>
            go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MenuList