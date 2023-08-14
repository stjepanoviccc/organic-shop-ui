import GreenButton from '../../UI/buttons/GreenButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './UnderFresh.module.scss';

const UnderFreshContainer = ({ type }) => {
    const underFreshContent = 
    type === 'disc' ? (
        <div className={styles.discountWrap}>
            <p className={styles.discountText}>Get 25% Off On Your First Purchase!</p>
            <GreenButton class={true}>
                <FontAwesomeIcon icon={faCartShopping} />
                Shop Now
            </GreenButton>
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