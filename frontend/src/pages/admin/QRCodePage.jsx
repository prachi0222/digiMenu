import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";

function QRCodePage({ isAdmin=true}) {
  const qrUrl="http://localhost:5173/menu/6a1ed40d5b2cc073a47ab395?view=customer"
  
  const downloadQR=()=>{
    const canvas=document.querySelector("canvas")
    const url=canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.download = "digimenu-qr.png";
    link.href = url;
    link.click();
  }
  return (
    <div className="container text-center py-5">
      <h2 className="py-2">Restaurant QR Code</h2>
       
      <QRCodeCanvas
        size={300}
        value={qrUrl}
      />
      <br />
    {isAdmin &&(
      <div className="d-flex justify-content-center ">
       <button
        className="btn btn-success mt-3 "
        onClick={downloadQR}
      >
        Download QR Code
      </button>
    
         <Link
            to="/admin"
            className="btn btn-dark text-white mt-3"
          ><i className='fas fa-arrow-left me-2 '></i>
            go to Dashboard
          </Link>
       </div>
    )}

   

    </div>
  );
}

export default QRCodePage;