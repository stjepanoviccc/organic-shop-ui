import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => {
    let logo;
    const isLocalhost = window.location.href.includes('localhost');
    { isLocalhost ? logo = `${process.env.PUBLIC_URL}/static/media/organic-store-logo5.svg` : logo = `./static/media/organic-store-logo5.svg` }

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