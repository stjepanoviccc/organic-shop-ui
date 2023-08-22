import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './InfoCard.module.scss';

const InfoCard = ({type}) => {
    const iconMap = {
        'phone': faPhone,
        'mail': faEnvelope,
        'location': faLocationDot
    };
    const firstLine = {
        'phone': '+123 456 7890',
        'mail': 'info@example.com',
        'location': '1569 Ave, New York,'
    }
    const secondLine = {
        'phone': '+123 456 7890',
        'mail': 'support@example.com',
        'location': 'NY 10028, USA'
    }

    return (
        <div className={styles.infoCard}>
            <FontAwesomeIcon className={styles.icon} icon={iconMap[type]}></FontAwesomeIcon>
            <div className={styles.cardContentHolder}>
                <p>{firstLine[type]}</p>
                <p>{secondLine[type]}</p>
            </div>
        </div>
    )
};

export default InfoCard;