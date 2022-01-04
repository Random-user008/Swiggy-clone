import React from 'react'
import './AppLink.css'
const AppLink = () => {
    return (
        <div className='appLink'>
            <div className='left1'>
                <p style={{fontSize:'40px',color:'#282c3f'}}>Restaurants in your pocket</p>
                <p style={{fontSize:'20px',color:'#7e808c',marginLeft:'50px'}}>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
                <div className='imgContainer'>
                    <a href='/'><img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp' alt='GPlay'/></a>
                    <a href='/'><img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty' alt='AStore'/></a>
                </div>
            </div>
            <div className='right1'>
                <img alt='img' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n' />
                <img alt='img1' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn' />
            </div>
        </div>
    )
}

export default AppLink
