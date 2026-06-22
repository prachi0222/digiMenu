import React, { useState } from 'react'
import "./common.css";
import { Link, useSearchParams } from "react-router-dom";
function Navbar() {
  const [searchParams] = useSearchParams();
  let [settingData, setSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITE_NAME,
    address: import.meta.env.VITE_APP_ADDRESS,
    phone: import.meta.env.VITE_APP_PHONE,
    owner: import.meta.env.VITE_APP_OWNER_NAME

  })

  const isCustomerView = searchParams.get('view') === 'customer'
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        <Link className="navbar-brand" to="/">

          <h2 className="m-0 text-uppercase text-dark"><i className="fas fa-utensils"></i>{settingData.siteName}</h2>
        </Link>

        <Link target='_blank' rel='noreference' className="text-decoration-none text-dark pe-3" to={`tel:${settingData.phone}`}>
          <i className="bi bi-telephone me-2">
            <span className='d-none d-xl-inline-block'>{settingData.phone}</span></i>
        </Link>

        <Link className="text-decoration-none text-dark pe-3">
          <i className="bi bi-geo-alt me-2">
            <span className='d-none d-xl-inline-block'>{settingData.address}</span></i>
        </Link>

        {!isCustomerView && (
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/menu/6a1ed40d5b2cc073a47ab395">
              Menu
            </Link>
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </div>
        )}

      </div>
    </nav>
  )

}

export default Navbar