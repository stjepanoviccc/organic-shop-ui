import { Link } from 'react-router-dom';
import GreenButton from '../../UI/buttons/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './UnderFresh.module.scss';

const UnderFreshContainer = ({ type }) => {
    const underFreshContent =
        type === 'disc' ? (
            <div className={styles.discountWrap}>
                <p className={styles.discountText}>Get 25% Off On Your First Purchase!</p>
                <Link to="/shop" style={{ width: '170px' }}>
                    <GreenButton class={true}>
                        <FontAwesomeIcon icon={faCartShopping} />Shop now
                    </GreenButton>
                </Link>
                <span className={styles.spikeDecoration}></span>
            </div>
        ) : type === 'reg' ? (
            <div className={styles.noRegistrationWrap}>
                <p className={styles.regText}>Try It For Free. No Registration Needed.</p>
            </div>
        ) : null;

    return underFreshContent;
};

export default UnderFreshContainer;