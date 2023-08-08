import { Link } from 'react-router-dom';
import useCheckDevice from '../../custom_hooks/CheckDevice';
import ProfileButton from './ProfileButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import styles from './HamburgerMenu.module.scss';

const HamburgerMenu = ({toggle}) => {
    const windowWidth = useCheckDevice();

    return (
        <div className={styles.hamburgerMenu}>
            {windowWidth < 920 && <ProfileButton />}
            {windowWidth < 920 && <button onClick={toggle}><FontAwesomeIcon icon={faX} className={styles.closeIcon} /></button>}
            <div className={styles.left}>
                <Link className={styles.link} to="/everything">
                    <p>Everything</p>
                </Link>
                <Link className={styles.link} to="/everything">
                    <p>Groceries</p>
                </Link>
                <Link className={styles.link} to="/everything">
                    <p>Juice</p>
                </Link>
            </div>
            <div className={styles.right}>
                <Link className={styles.link} to="/about">
                    <p>About</p>
                </Link>
                <Link className={styles.link} to="/contact">
                    <p>Contact</p>
                </Link>
            </div>
        </div>
    )
};

export default HamburgerMenu;