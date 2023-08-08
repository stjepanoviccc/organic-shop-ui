import { Link } from 'react-router-dom';
import useCheckDevice from '../../custom_hooks/CheckDevice';
import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import HamburgerMenu from './HamburgerMenu';
import CartButton from './CartButton';
import ProfileButton from './ProfileButton';
import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => {
    const windowWidth = useCheckDevice();
    const logo = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/organic-store-logo5.svg`, './static/media/organic-store-logo5.svg');
    const classNames = `${styles.wrap} ${styles.nav}`

    return (
        <div className={classNames}>
            <Link to="/">
                <img src={logo} alt="logo" className={styles.logo} />
            </Link>
            <HamburgerMenu />
            <CartButton />
            {windowWidth > 920 && <ProfileButton />}
        </div>
    );
}

export default NavigationMenu;