import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => {
    const logo = `${process.env.PUBLIC_URL}/static/media/organic-store-logo5.svg`;
    const classNames = `${styles.wrap} ${styles.nav}`

    return (
        <div className={classNames}>
            <Link to="/">
                <img src={logo} alt="logo" className={styles.logo} />
            </Link>
            <HamburgerMenu />
            
        </div>
    );
}

export default NavigationMenu;