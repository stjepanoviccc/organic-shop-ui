import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons'; // , faEnvelope, faLocationDot 
import styles from './ContactCard.module.scss';

const ContactCard = () => {
    return (
        <div className={styles.contactCard}>
            <FontAwesomeIcon className={styles.icon} icon={faPhone}></FontAwesomeIcon>
            <div className={styles.cardContent}>
                <p>info@example.com</p>
                <p>support@example.com</p>
            </div>
        </div>
    )
};

export default ContactCard;