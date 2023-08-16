import { Link } from 'react-router-dom';
import styles from './Areas.module.scss';

const QuickLinksArea = () => {
    return (
        <>
            <h3 className={styles.areasTitle}>Quick Links</h3>
            <div className={styles.areasContentHolder}>
                <Link className={styles.areasLink} to="#">About</Link>
                <Link className={styles.areasLink} to="#">Cart</Link>
                <Link className={styles.areasLink} to="#">Checkout</Link>
                <Link className={styles.areasLink} to="#">Contact</Link>
                <Link className={styles.areasLink} to="#">Home</Link>
                <Link className={styles.areasLink} to="#">My Account</Link>
                <Link className={styles.areasLink} to="#">Shop</Link>
            </div>
        </>
    )
};

export default QuickLinksArea;