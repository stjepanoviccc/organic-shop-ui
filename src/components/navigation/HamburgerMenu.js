import { Link } from 'react-router-dom';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = () => {
    return (
        <div className={styles.hamburgerMenu}>
            <div className={styles.left}>
                <Link to="/everything">
                    <p>Everything</p>
                </Link>
                <Link to="/everything">
                    <p>Groceries</p>
                </Link>
                <Link to="/everything">
                    <p>Juice</p>
                </Link>
            </div>
            <div className={styles.right}>
                <Link to="/about">
                    <p>About</p>
                </Link>
                <Link to="/contact">
                    <p>Contact</p>
                </Link>
            </div>
        </div>
    )
};

export default HamburgerMenu;