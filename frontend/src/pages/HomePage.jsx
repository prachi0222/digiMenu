import React from 'react'
import QR from '../components/QR';
import QRCodePage from './admin/QRCodePage';

function HomePage() {
  return (
   <div className="container-fluid d-flex flex-column min-vh-100">

      <div className="text-center">

        <h1 className="display-4">
          Digital Menu for Restaurants
        </h1>

      
        <QRCodePage  isAdmin={false}/>
      </div>

    </div>
  );
  
}

export default HomePage