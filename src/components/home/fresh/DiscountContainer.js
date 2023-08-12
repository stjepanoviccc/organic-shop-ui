import GreenButton from '../../UI/buttons/GreenButton';
import styles from './FreshContainer.module.scss';

const DiscountContainer = () => {
    return (
        <>
        <div className={styles.discountWrap}>
            <p>Get 25% Off On Your First Purchase!</p>
            <GreenButton />
        </div>
        <div className={styles.noRegistrationWrap}>
            <p>Try It For Free. No Registration Needed.</p>
        </div>
        </>
    )
};

export default DiscountContainer;