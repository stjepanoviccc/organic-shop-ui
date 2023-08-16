import { Link } from 'react-router-dom';
import styles from './BelowFooter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const BelowFooter = () => {
    return (
        <div className={styles.belowFooterContainer} >
            <p className={styles.copyright}>Copyright © 2023 | Andrej Stjepanović </p>
            <div className={styles.socialHolder}>
                <Link className={styles.socialIconLink} to="#"><FontAwesomeIcon icon={faFacebook} /></Link>
                <Link className={styles.socialIconLink} to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                <Link className={styles.socialIconLink} to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
            </div>
        </div>
    )
};

export default BelowFooter;