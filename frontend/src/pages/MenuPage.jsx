import React from 'react'
import { useParams } from 'react-router-dom'
import { menus } from '../data/dummyData'

function MenuPage() {
     const { restaurantId } = useParams()
    return (
        <div className='container d-flex flex-column min-vh-100 py-1'>
            <h2 className='text-center my-3'>Restaurant Menu</h2>

            <p className='text-center text-muted'>
                Restaurant ID: {restaurantId}
            </p>

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