import React from 'react'
import { menus } from '../../data/dummyData'

function MenuList() {
  return (
    <div className="container py-5">
      <h2 className='mb-4'>Menu List</h2>
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
              <th>Edit</th>
              <th>Delete</th>

            </tr>
          </thead>

          <tbody>
            {menus.map((item, index) => (
              <tr key={item.id}>

                <td>{index + 1}</td>
                <img
                  src={item.image}
                  alt={item.itemName}
                  width="60"
                  height="60"
                  className="rounded"
                />
                <td>{item.itemName}</td>
                <td>{item.category}</td>
                <td>&#8377;{item.price}</td>
                <td>{item.status ? "Active" : "Inactive"}</td>
                <td>
                  <button className='btn btn-warning btn-sm'>Edit</button>
                </td>
                <td><button className='btn btn-danger btn-sm'>Delete</button></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MenuList