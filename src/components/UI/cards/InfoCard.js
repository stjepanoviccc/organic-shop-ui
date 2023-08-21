import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons'; // , faEnvelope, faLocationDot 
import styles from './InfoCard.module.scss';

const InfoCard = () => {
    return (
        <div className={styles.infoCard}>
            <FontAwesomeIcon className={styles.icon} icon={faPhone}></FontAwesomeIcon>
            <div className={styles.cardContentHolder}>
                <p>info@example.com</p>
                <p>support@example.com</p>
            </div>
        </div>
    )
};

export default InfoCard;