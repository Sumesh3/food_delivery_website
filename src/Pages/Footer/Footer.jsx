import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <div className='aaa'>
                        <img className='footer_logo' src={assets.logo} alt="" />
                        <img className='footer_logo2' src={assets.stallions2} alt="" />
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sapiente suscipit dolorum unde autem recusandae explicabo quasi perferendis. Animi nobis minus, quo porro placeat reiciendis corrupti accusamus at non natus.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us </li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9539451245</li>
                        <li>sumeshmkx@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}
