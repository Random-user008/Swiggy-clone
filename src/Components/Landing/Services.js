import React from 'react'
import '../Landing/Services.css'
const Services = () => {
    return (
        <div className='services'>
            <div>
                <div className='image1'></div>
                <div className='content'>
                    <p><b>No Minimum Order</b></p>
                    <p style={{color:'#e0cbc1'}}>Order in for yourself or for the group, with no restrictions on order value</p>
                </div>
            </div>
            <div>
                <div className='image2'></div>
                <div className='content'>
                    <p><b>Live Order Tracking</b></p>
                    <p style={{color:'#e0cbc1'}}>Know where your order is at all times, from the restaurant to your doorstep</p>
                </div>
            </div>
            <div>
                <div className='image3'></div>
                <div className='content'>
                    <p><b>Lightning-Fast Delivery</b></p>
                    <p style={{color:'#e0cbc1'}}>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
                </div>
            </div>
        </div>
    )
}

export default Services
