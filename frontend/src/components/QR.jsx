import React from 'react'

function QR() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-md-12 text-center">
          <img
            src="/images/QR-img.png"
            alt="QR Code"
            className="img-fluid"
          />
        </div>

        <div className="col-md-12">
          <h2>Scan & View Menu</h2>

          <p>
            Scan the QR code and instantly view the restaurant menu.
          </p>

          <button className="btn btn-warning">
            Learn More
          </button>
        </div>

      </div>
    </div>
  
  )
}

export default QR