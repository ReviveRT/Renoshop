import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faBehance} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialSyle from './footerSocial.module.css'

function FooterSocial() {
  return (
    <div className={SocialSyle.socialContainer}>
        <div className={SocialSyle.container}>
            <div className={SocialSyle.title}>
                <p>We are confident we have provided all the best for you. 
                    Stay connect with us</p>
            </div>
            <div className={SocialSyle.socialMedia}>
                <FontAwesomeIcon className={SocialSyle.icon} icon={faFacebookF} />
                <FontAwesomeIcon className={SocialSyle.icon} icon={faTwitter} />
                <FontAwesomeIcon className={SocialSyle.icon} icon={faInstagram} />
                <FontAwesomeIcon className={SocialSyle.icon} icon={faLinkedinIn} />
                <FontAwesomeIcon className={SocialSyle.icon} icon={faBehance} />
            </div>
        </div>
    </div>
  )
}

export default FooterSocial