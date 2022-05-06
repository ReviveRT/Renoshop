import HeadContact from './head-contact.module.css'
import { faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faBehance} from '@fortawesome/free-brands-svg-icons'


export default function MainHeadContact() {
  return (
    <div className={HeadContact.headContacts}>
      <div className={HeadContact.headContactsContainer}>
        <section className={HeadContact.contacts}>
          <p className={HeadContact.phone} ><FontAwesomeIcon className={HeadContact.iconPhone} icon={faPhone} />+1-234-567-89</p><span className={HeadContact.border}>|</span>
          <p className={HeadContact.mail}><FontAwesomeIcon className={HeadContact.iconMail} icon={faEnvelope} />Info@renoshop.com</p>
        </section>
        <section className={HeadContact.socialMedia}>
          <FontAwesomeIcon className={HeadContact.icon} icon={faFacebookF} />
          <FontAwesomeIcon className={HeadContact.icon} icon={faTwitter} />
          <FontAwesomeIcon className={HeadContact.icon} icon={faInstagram} />
          <FontAwesomeIcon className={HeadContact.icon} icon={faLinkedinIn} />
          <FontAwesomeIcon className={HeadContact.icon} icon={faBehance} />
        </section>
      </div>
    </div>
  )
}