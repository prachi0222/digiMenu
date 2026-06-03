import React from 'react'
import QR from '../components/QR';

function HomePage() {
  return (
   <div className="container-fluid d-flex flex-column min-vh-100">

      <div className="text-center">

        <h1 className="display-4">
          Digital Menu for Restaurants
        </h1>

      
        <QR/>
      </div>

    </div>
  );
  
}

export default HomePage