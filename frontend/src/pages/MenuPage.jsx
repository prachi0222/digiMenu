import React from 'react'
import { menus } from '../data/dummyData'
function MenuPage() {
    return (
        <div className='container d-flex flex-column min-vh-100 py-1'>
            <div className="row">
                {
                    menus.map((item) => (
                        <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                            <div className="card mb-3">
                                <img className="card-img-top" src={item.image} height={200} width={200} alt="" />

                                <div className="card-body">
                                    <h5>{item.itemName}</h5>
                                    <p>{item.category}</p>
                                    <h6>{item.price}</h6>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MenuPage