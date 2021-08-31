import React from 'react'

 const Footer = () => {
    return (
        <div className="footer-contain">

            <div className="links">
                <span id="color">Useful Links:</span>
                <ul>
                    <li>Back to Top</li>
                    <li>FAQ</li>
                    <li>Cancellation</li>
                    <li>Track Order</li>
                    <li>Refund Policy</li>
                    <li>Privacy Policy</li>
                    <li>Site Map</li>
                </ul>
            </div>

            <div className="categories-links">
                <span id="color">Online Shopping</span>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Gift Cards</li>
                    <li>New Releases</li>
                </ul>
            </div>

            <div className="contact">
                <span id="color">Contact Us!</span>
                <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Youtube</li>
                <li>Email us</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer;
