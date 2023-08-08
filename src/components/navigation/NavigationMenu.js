import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import styles from './NavigationMenu.module.scss';
import Logo from './organic-store-logo5.svg';

const NavigationMenu = () => {
    const classNames = `${styles.wrap} ${styles.nav}`
    return (
        <div className={classNames}>
            <Link to="/">
                <img src={Logo} alt="logo" className={styles.logo} />
            </Link>
            <HamburgerMenu />
            
        </div>
    );
}

export default NavigationMenu;