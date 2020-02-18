import { FaGithub, FaLinkedin, FaLocationArrow, FaSearchLocation } from 'react-icons/fa';
import { MdMailOutline, MdLocationOn } from 'react-icons/md';
import styles from '../styles/contactIcons.module.css';

const ContactIcons = () => {
    return <div className={styles.ContactIcons}>
        <a href="https://github.com/DelightedWaif" target="_blank">
            <FaGithub className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/timothy-mather/" target="_blank">
            <FaLinkedin className={styles.icon} />
        </a>
        <a href="mailto: tmather@mun.ca" target="_blank">
            <MdMailOutline className={styles.icon} />
        </a>
        <div className={styles.contactGroup}>
            <MdLocationOn className={styles.icon} />
            <p className={styles.text}>Dublin, Ireland</p>
        </div>
    </div>
}

export default ContactIcons;
