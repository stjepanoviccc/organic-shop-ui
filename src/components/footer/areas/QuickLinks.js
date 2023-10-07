import { Link } from 'react-router-dom';
import styles from './Areas.module.scss';

const QuickLinksArea = () => {
    return (
        <>
            <h3 className={styles.areasTitle}>Quick Links</h3>
            <div className={styles.areasContentHolder}>
                <Link className={styles.areasLink} to="/about">About</Link>
                <Link className={styles.areasLink} to="/shop">Cart</Link>
                <Link className={styles.areasLink} to="/shop">Checkout</Link>
                <Link className={styles.areasLink} to="/contact">Contact</Link>
                <Link className={styles.areasLink} to="/">Home</Link>
                <Link className={styles.areasLink} to="/profile">My Account</Link>
                <Link className={styles.areasLink} to="/shop">Shop</Link>
            </div>
        </>
    )
};

export default QuickLinksArea;