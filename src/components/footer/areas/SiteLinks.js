import { Link } from 'react-router-dom';
import styles from './Areas.module.scss';

const SiteLinksArea = () => {
    return (
        <>
            <h3 className={styles.areasTitle}>Site Links</h3>
            <div className={styles.areasContentHolder}>
                <Link className={styles.areasLink} to="/">Privacy Policy</Link>
                <Link className={styles.areasLink} to="/">Shipping Details</Link>
                <Link className={styles.areasLink} to="/">Offers Coupons</Link>
                <Link className={styles.areasLink} to="/">Terms & Conditions</Link>
            </div>
        </>
    )
};

export default SiteLinksArea;