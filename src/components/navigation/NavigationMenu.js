import { Link } from 'react-router-dom';
import { useBackgroundColor } from '../../context/NavBackgroundContext';
import useCheckBodyBehavior from '../../custom_hooks/CheckBodyBehavior';
import useCheckDevice from '../../custom_hooks/CheckDevice';
import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import HamburgerMenu from './HamburgerMenu';
import HamburgerToggler from './HamburgerToggler';
import CartToggler from './CartToggler';
import ProfileButton from '../UI/buttons/ProfileButton';
import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => {
    useCheckBodyBehavior();
    const windowWidth = useCheckDevice();
    const logo = useCheckImagePath(`${process.env.PUBLIC_URL}/static/media/organic-store-logo5.svg`, './static/media/organic-store-logo5.svg');
    const bgColor = useBackgroundColor();

    return (
        <header>
            <div className={styles.nav} style={{backgroundColor: bgColor}}>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>
                {windowWidth > 920 && <HamburgerMenu />}
                <CartToggler />
                {windowWidth > 920 ? <ProfileButton /> : <HamburgerToggler />}
            </div>
        </header>
    );
}

export default NavigationMenu;