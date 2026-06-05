import React from 'react'
import{Link} from "react-router-dom"
import {menus} from "../../data/dummyData"
import { useState } from 'react'
import { useEffect } from 'react'
function Dashboard() {

const [menuList, setMenuList]=useState([])

useEffect(()=>{
  const data=JSON.parse(localStorage.getItem("menus")) || menus

  setMenuList(data)
},[])

const totalItem = menuList.length;

  const availableItems = menuList.filter(
    (item) => item.status === "Active"
  ).length;
   
  return (
    <div className="container py-5">
      <h1 className='mb-4'>Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-6 mb-3">
            <div className="card shadow">
                    <div className="card-body ">
                      <h5>Total Menu Items</h5>
                      <h2>
                       {totalItem}
                      </h2>
                    </div>
            </div>
        </div>
         <div className="col-md-6 mb-3">
            <div className="card shadow">
                    <div className="card-body ">
                      <h5>Available Item</h5>
                      <h2>{availableItems}</h2>
                    </div>
            </div>
        </div>
      </div>
      <div className="mt-4">
        
         <Link
          to="/admin/menu"
          className="btn btn-warning text-white"
        >
          View Menu
        </Link>
      </div>
    </div>
  )
}

export default Dashboard