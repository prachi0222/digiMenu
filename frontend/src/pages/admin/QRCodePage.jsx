import React from 'react'
import QRcode from "react-qr-code"
function QRCodePage() {
  const restaurantId="6a1ed40d5b2cc073a47ab395"
  const menuUrl=`${import.meta.env.VITE_APP_URL}/menu${restaurantId.id}`
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body p-4 text-center">
              <h2 className="mb-4">Restaurant QR Code</h2>

              <p>
                Scan this QR code to view the menu
              </p>

              <div className="d-flex justify-content-center mb-4">
                <QRcode value={menuUrl} size={220} />
              </div>

              <p className="text-muted">
                Restaurant ID: {restaurantId}
              </p>

              <button className="btn btn-success">
                Download QR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRCodePage