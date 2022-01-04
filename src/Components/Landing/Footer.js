import React from 'react'
import '../Landing/Footer.css'
const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='companyDet'>
                <div className='companyDet-in'>
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Team</li>
                        <li>Bug Bounty</li>
                        <li>Careers</li>
                        <li>Swiggy Blog</li>
                        <li>Swiggy One</li>
                        <li>Swiggy Corporate</li>
                        <li>Swiggy Instamart</li>
                    </ul>
                </div>
                <div className='companyDet-in'>
                    <h4>Contact</h4>
                    <ul>
                        <li>Help & Support</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className='companyDet-in'>
                    <h4>Legal</h4>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Refund & Cancellation</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                        <li>Offer Terms</li>
                        <li>Phishing & Fraud</li>
                    </ul>
                </div>
                <div className='companyDet-in'>
                    <img alt='linked' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv' />
                    <img alt='linked' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl' />
                </div>
            </div>
            <hr></hr>
            <div className='companyDet'>
                <div className='companyDet-in'>
                    <h4>We Deliver to</h4>
                    <ul>
                        <li>Agra</li>
                        <li>Bangalore</li>
                        <li>Central-Goa</li>
                        <li>Darjeeling</li>
                        <li>Guwahati</li>
                        <li>Hyderabad</li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div style={{gap:'20rem',marginTop:'-50px'}} className='companyDet'>
                <div className='companyDet-in'>
                    <img style={{height:'80px',width:'200px'}} src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza' alt='next' />
                </div>
                <div className='companyDet-in1'>
                    <h3>@2022 Swiggy</h3>
                </div>
                <div className='companyDet-in1'>
                    <img style={{height:'24px',width:'24px'}} src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc' alt='fb' />
                    <img style={{height:'24px',width:'24px'}} src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd' alt='fb' />
                    <img style={{height:'24px',width:'24px'}} src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh' alt='fb' />
                    <img style={{height:'24px',width:'24px'}} src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv' alt='fb' />
                </div>
            </div>
        </div>
    )
}

export default Footer
