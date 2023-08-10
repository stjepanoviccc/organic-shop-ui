import { Link } from 'react-router-dom';
import useCheckDevice from '../../custom_hooks/CheckDevice';
import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import HamburgerMenu from './HamburgerMenu';
import HamburgerToggler from './HamburgerToggler';
import CartToggler from './CartToggler';
import ProfileButton from './ProfileButton';
import styles from './NavigationMenu.module.scss';

const NavigationMenu = ({ toggle, active }) => {
    const windowWidth = useCheckDevice();
    const logo = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/organic-store-logo5.svg`, './static/media/organic-store-logo5.svg');
    const classNames = `${styles.nav}`

    return (
        <header>
            <div className={classNames}>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>
                {windowWidth > 920 && <HamburgerMenu />}
                <CartToggler />
                {windowWidth > 920 ? <ProfileButton /> : <HamburgerToggler toggle={toggle} active={active} />}
            </div>
        </header>
    );
}

export default NavigationMenu;