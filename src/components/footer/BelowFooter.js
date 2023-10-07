import { Link } from 'react-router-dom';
import styles from './BelowFooter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const BelowFooter = () => {
    return (
        <div className={styles.belowFooterContainer} >
            <p className={styles.copyright}>Copyright © 2023 | <Link target="_blank" to="https://github.com/stjepanoviccc">Andrej Stjepanović</Link> </p>
            <div className={styles.socialHolder}>
                <Link target="_blank" className={styles.socialIconLink} to="https://www.facebook.com/profile.php?id=100010271801032"><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link target="_blank" className={styles.socialIconLink} to="https://www.linkedin.com/in/andrej-stjepanovic/"><FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link target="_blank" className={styles.socialIconLink} to="https://www.instagram.com/andrejstjepanovicc/"><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
        </div>
    )
};

export default BelowFooter;