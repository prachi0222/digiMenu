import React from 'react'
import { useParams } from "react-router-dom";

function EditMenu() {
  const { id } = useParams();

  return (
    <div className="container py-5">
      <h1>Edit Menu</h1>
      <p>Menu ID: {id}</p>
    </div>
  )
}

export default EditMenu