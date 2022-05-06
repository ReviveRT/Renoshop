import FooterStyle from './kidsFooter.module.css'
import { FaGlobe, FaPhone, FaEnvelope } from "react-icons/fa";


function KidsFooter() {
  return (
    <div className={FooterStyle.footerContainer}>
        <div className={FooterStyle.container}>
            <div className={FooterStyle.info}>
                <h2>INFORMATION</h2>
                <p>Delivery Information</p>
                <p>Discount</p>
                <p>Sitemap</p>
                <p>Privacy Policy</p>
                <p>My Account</p>
            </div>
            <div className={FooterStyle.myAccount}>
                <h2>MY ACCOUNT</h2>
                <p>Sign In</p>
                <p>View Cart</p>
                <p>My Wishlist</p>
            </div>
            <div className={FooterStyle.help}>
                <h2>HELP</h2>
                <p>F.A.Q.</p>
                <p>Shipping</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
            </div>
            <div className={FooterStyle.contactInfo}>
                <h2>CONTACT INFO</h2>
                <p><span><FaGlobe /></span> 3815 Fancher Drive,Plano,Texas</p>
                <p><span><FaPhone /></span> +1-123-456-7899</p>
                <p><span><FaEnvelope /></span> Mail@renoshop.com</p>
            </div>
        </div>
    </div>
  )
}

export default KidsFooter